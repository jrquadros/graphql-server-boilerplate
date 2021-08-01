import { GraphQLNonNull, GraphQLString } from 'graphql'

import { CreateDatabaseConnection } from '../../../database/CreateDatabaseConnection'
import { UserType } from '../UserType'
import { Users } from '../User'
// import { User } from '../User'
import { mutationWithClientMutationId } from 'graphql-relay'

type UserRegistrationArgs = {
	firstName: string
	lastName: string
	email: string
	clientMutationId: string
}

export const UserRegistration = mutationWithClientMutationId({
	name: 'UserRegistration',
	inputFields: {
		firstName: {
			type: GraphQLNonNull(GraphQLString),
			description: 'User first name',
		},
		lastName: {
			type: GraphQLNonNull(GraphQLString),
			description: 'User last name',
		},
		email: {
			type: GraphQLNonNull(GraphQLString),
			description: 'User email',
		},
	},
	outputFields: {
		user: {
			type: UserType,
			resolve: (payload: Users) => {
				console.log(payload, 'PAYLOAD')
				return payload
			},
		},
	},
	mutateAndGetPayload: async ({ firstName, lastName, email }: UserRegistrationArgs) => {
		const connection = await CreateDatabaseConnection()

		const userRepository = connection.getRepository(Users)

		const user = new Users(firstName, lastName, email)

		await userRepository.save(user)
		await connection.close()

		return user
	},
})
