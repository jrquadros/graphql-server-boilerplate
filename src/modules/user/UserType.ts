import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import { NodeInterface } from '../../graphql/types/NodeInterface'
import { globalIdField, connectionDefinitions } from 'graphql-relay'

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
