const { buildSchema } = require('graphql');

const Bookschema = buildSchema(`
  type Book {
    title: String
    author: String
  }
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }
  type Query {
    results: [Book]
    welcome(name:String):String
    getAllPost:[Post]
  }
`);

module.exports={
  Bookschema 
}