import * as dotenv from 'dotenv'

import { App } from './server/App'
import { getEnvironment } from './server/AppConfig'

;(async () => {
	dotenv.config()
	const { portNumber } = getEnvironment()
	App.listen(portNumber)
	console.log(`Server Running at ${portNumber} 🚀`)
})()
