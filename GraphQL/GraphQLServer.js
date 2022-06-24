const { default: axios } = require('axios');
const { graphqlHTTP } = require('express-graphql');
const {collection} =require("../Database/database");
const { Bookschema } = require('./Bookschema');


  const dblist=async()=>{
      const findResult = await collection.find({}).toArray();
      return findResult
  }


const root = { 
  results: () => dblist(),
  welcome:(args)=> args.name,
  getAllPost:async()=>{
   const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
   return res.data
  }
};

const graphqlserver=graphqlHTTP({
    schema: Bookschema,
    rootValue: root,
    graphiql: true,
  })

  module.exports={
    graphqlserver
  }