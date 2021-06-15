const { gql } = require('apollo-server-azure-functions');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    books: [Book]
    users: [User]
  }
  
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }  

  type User {
    id: Int
    name: String
    age: String
  }
`;

module.exports = {
    typeDefs,
    gql
};