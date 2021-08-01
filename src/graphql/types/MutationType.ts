import { GraphQLObjectType } from 'graphql'
import { UserRegistration } from '../../modules/user/mutation/UserRegistration'

export const MutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({ userRegistration: UserRegistration }),
})
