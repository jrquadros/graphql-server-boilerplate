import { GraphQLSchema } from 'graphql'
import { MutationType } from './types/MutationType'
import { QueryType } from './types/QueryType'

export const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType })

export default schema
