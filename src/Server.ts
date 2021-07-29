import 'reflect-metadata'

import * as dotenv from 'dotenv'

import { App } from './server/App'
import { CreateDatabaseConnection } from './database/CreateDatabaseConnection'
import { getEnvironment } from './server/AppConfig'

;(async function start() {
	dotenv.config()
	const { PORT } = getEnvironment()

	await CreateDatabaseConnection()

	App.listen(PORT)
	console.log(`Server Running at ${PORT} 🚀`)
})()
