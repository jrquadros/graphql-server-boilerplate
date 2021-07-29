import { Connection, createConnection } from 'typeorm'

import { Users } from '../modules/user/User'
import { getEnvironment } from '../server/AppConfig'

export const CreateDatabaseConnection = async (): Promise<Connection> => {
	const { HOST, POSTGRES_PASSWORD, DB_USER, POSTGRES_DB } = getEnvironment()

	try {
		const connection = await createConnection({
			type: 'postgres',
			host: HOST,
			password: POSTGRES_PASSWORD,
			username: DB_USER,
			database: POSTGRES_DB,
			entities: [Users],
			synchronize: true,
		})

		console.log(`Database ${POSTGRES_DB} connected 🚀`)

		return connection
	} catch (error) {
		throw new Error(error)
	}
}
