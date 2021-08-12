import { getEnvironment } from '../server/AppConfig'

enum ConnectionNameEnum {
	'default' = 'default',
	'test' = 'test',
}

export const getConnectionName = (): ConnectionNameEnum => {
	const { NODE_ENV } = getEnvironment()

	if (NODE_ENV === 'test') return ConnectionNameEnum.test

	return ConnectionNameEnum.default
}
