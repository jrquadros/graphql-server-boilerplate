/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */

import { Connection, ConnectionOptions, createConnection } from 'typeorm'

import { Users } from '../modules/user/User'
import { getConnectionName } from '../utils/getConnectionName'
import { getEnvironment } from '../server/AppConfig'

export const CreateDatabaseConnection = async (): Promise<Connection> => {
	try {
		const {
			POSTGRES_DB,
			DB_USER,
			HOST,
			POSTGRES_PASSWORD,
			DB_USER_TEST,
			POSTGRES_DB_TEST,
			HOST_TEST,
			POSTGRES_PASSWORD_TEST,
		} = getEnvironment()
		const connectionName = getConnectionName()

		console.log(`Database ${POSTGRES_DB} connected 🚀`)

		const isTest = connectionName === 'test'

		const connectionOptions: ConnectionOptions = {
			type: 'postgres',
			name: connectionName as string,
			username: isTest ? DB_USER_TEST : DB_USER,
			database: isTest ? POSTGRES_DB_TEST : POSTGRES_DB,
			password: isTest ? POSTGRES_PASSWORD_TEST : POSTGRES_PASSWORD,
			host: isTest ? HOST_TEST : HOST,
			entities: [Users],
			synchronize: true,
		}

		return await createConnection(connectionOptions)
	} catch (error) {
		throw new Error(error)
	}
}
