import { GraphQLFieldConfigMap, GraphQLNonNull } from 'graphql'
import { connectionArgs, connectionDefinitions, connectionFromArray } from 'graphql-relay'

import { Context } from '../../../server/App'
import { UserType } from '../UserType'
import { Users } from '../User'
import { getConnection } from 'typeorm'

const UserConnectionDefinitions = connectionDefinitions({ name: 'User', nodeType: UserType })

export const UsersQuery: GraphQLFieldConfigMap<Users, Context> = {
	Users: {
		type: GraphQLNonNull(UserConnectionDefinitions.connectionType),
		args: connectionArgs,
		resolve: async (_, args) => {
			try {
				const connection = getConnection()
				const users = await connection.getRepository(Users).find({ cache: true })
				return connectionFromArray(users, args)
			} catch (error) {
				console.log(error)
			}
		},
	},
}
