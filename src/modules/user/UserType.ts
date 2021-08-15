import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

import { NodeInterface } from '../../graphql/types/NodeInterface'
import { Users } from './User'
import { globalIdField } from 'graphql-relay'

export const UserType: GraphQLObjectType = new GraphQLObjectType<Users>({
	name: 'User',
	description: 'User',
	fields: () => ({
		id: globalIdField('User'),
		_id: {
			type: GraphQLNonNull(GraphQLInt),
			resolve: ({ _id }) => _id,
		},
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
