import * as Koa from 'koa'
import * as Router from '@koa/router'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as graphqlHTTP from 'koa-graphql'
import * as helmet from 'koa-helmet'
import * as logger from 'koa-logger'

import { schema } from '../graphql/schema'

export type Context = Koa.Context

const app = new Koa()
const router = new Router()

const graphqlServer = graphqlHTTP({
	schema,
	graphiql: true,
})

router.all('/graphql', bodyParser(), graphqlServer)

app.use(graphqlServer)

app.use(logger())
app.use(cors())
app.use(helmet())

app.use(router.routes()).use(router.allowedMethods())

export const App = app
