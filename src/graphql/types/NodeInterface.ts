import { fromGlobalId, nodeDefinitions } from 'graphql-relay'

import { UserType } from '../../modules/user/UserType'
import { Users } from '../../modules/user/User'

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
	async (globalId: string) => {
		const { id: userGlobalID, type } = fromGlobalId(globalId)
		// TODO: Implement User Dataloader
		if (type === 'User') return [].find(({ id }: Users) => (id as string) === userGlobalID) // FIXME
		return null
	},

	(obj) => {
		if (obj instanceof Users) return UserType
		return null
	},
)

export const NodeInterface = nodeInterface
export const NodeField = nodeField
export const NodesField = nodesField
