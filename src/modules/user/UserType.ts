import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { connectionDefinitions, globalIdField } from 'graphql-relay'

import { NodeInterface } from '../../graphql/types/NodeInterface'

export const UserType: GraphQLObjectType = new GraphQLObjectType({
	name: 'User',
	description: 'User',
	fields: () => ({
		id: globalIdField('User'),
		firstName: {
			type: GraphQLNonNull(GraphQLString),
			resolve: ({ firstName }) => firstName,
		},
		lastName: {
			type: GraphQLNonNull(GraphQLString),
			resolve: ({ lastName }) => lastName,
		},
		email: {
			type: GraphQLNonNull(GraphQLString),
			resolve: ({ email }) => email,
		},
	}),
	interfaces: () => [NodeInterface],
})

export const UserConnection = connectionDefinitions({ name: 'User', nodeType: UserType })
