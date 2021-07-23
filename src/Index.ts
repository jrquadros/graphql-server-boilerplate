import { startServer } from './server/Server'
import * as dotenv from 'dotenv'
;(async () => {
  dotenv.config()
  startServer()
})()
