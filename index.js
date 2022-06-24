const express = require('express')
require("./Database/database")
const app = express()
const { graphqlserver } = require('./GraphQL/GraphQLServer');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/graphql', graphqlserver);
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
