import * as dotenv from 'dotenv'

import { startServer } from './server/Server'

(async () => {
	dotenv.config()
	startServer()
})()
