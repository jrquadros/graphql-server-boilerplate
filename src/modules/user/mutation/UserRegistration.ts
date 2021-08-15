import { GraphQLNonNull, GraphQLString } from 'graphql'

import { UserType } from '../UserType'
import { Users } from '../User'
import { getConnection } from 'typeorm'
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
				return payload
			},
		},
	},
	mutateAndGetPayload: async ({ firstName, lastName, email }: UserRegistrationArgs) => {
		try {
			const connection = getConnection()
			const userRepository = connection.getRepository(Users)
			const user = new Users(firstName, lastName, email)
			await userRepository.save(user)

			return user
		} catch (error) {
			console.log(error)
			throw new Error(error)
		}
	},
})
