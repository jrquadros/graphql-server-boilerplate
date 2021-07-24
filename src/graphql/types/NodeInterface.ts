import { User, users } from '../../modules/user/User'
import { fromGlobalId, nodeDefinitions } from 'graphql-relay'

import {UserType} from '../../modules/user/UserType'

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
	async (globalId: string) => {
		const { id: userGlobalID, type } = fromGlobalId(globalId)
		if (type === 'User') return users.find(({ id }: User) => (id as string) === userGlobalID)
		return null
	},

	(obj) => {
		if (obj instanceof User) return UserType
		return null
	}
)

export const NodeInterface = nodeInterface
export const NodeField = nodeField
export const NodesField = nodesField
