import { GraphQLObjectType } from 'graphql'
import { UsersQuery } from '../../modules/user/query/Users'

export const QueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'The root of all... queries',
	fields: () => ({ ...UsersQuery }),
})
