import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { NodeField, NodesField } from './NodeInterface'
import { connectionArgs, connectionFromArray } from 'graphql-relay'

import { UserConnection } from '../../modules/user/UserType'
import { users } from '../../modules/user/User'

export const QueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'The root of all... queries',
	fields: () => ({
		node: NodeField,
		nodes: NodesField,
		users: {
			type: GraphQLNonNull(UserConnection.connectionType),
			args: connectionArgs,
			resolve: (_, args) => connectionFromArray(users, args),
		},
	}),
})