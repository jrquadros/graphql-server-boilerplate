import * as express from 'express'

import ExpressPlayground from 'graphql-playground-middleware-express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from '../graphql/schema'

const app = express()

const graphql = graphqlHTTP({ schema, graphiql: false })

app.use('/graphql', graphql)

app.get('/playground', ExpressPlayground({ endpoint: '/graphql' }))

export const App = app
