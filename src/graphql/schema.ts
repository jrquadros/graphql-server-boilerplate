import { GraphQLSchema } from 'graphql'
import { QueryType } from './types/Query'

export const schema = new GraphQLSchema({ query: QueryType })

export default schema
