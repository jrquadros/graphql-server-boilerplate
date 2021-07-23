import * as Koa from 'koa'
import * as cors from '@koa/cors'
import * as Router from '@koa/router'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as helmet from 'koa-helmet'
import * as graphqlHTTP from 'koa-graphql'
import { schema } from '../graphql/schema'
import { getEnvironment } from './AppConfig'

const app = new Koa()
const router = new Router()

const graphqlServer = graphqlHTTP({
  schema,
  graphiql: true,
})

router.all('/graphql', bodyParser(), graphqlServer)

export function startServer() {
  const { port } = getEnvironment()

  app.listen(port)

  app.use(graphqlServer)

  app.use(logger())
  app.use(cors())
  app.use(helmet())

  app.use(router.routes()).use(router.allowedMethods())

  console.log(`Server Running at ${port} 🚀`)
}
