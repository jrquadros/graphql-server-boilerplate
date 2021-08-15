import * as express from 'express'

import { graphqlHTTP } from 'express-graphql'
import { schema } from '../graphql/schema'

const app = express()

const graphql = graphqlHTTP({ schema, graphiql: true })

app.use('/graphql', graphql)

export const App = app
