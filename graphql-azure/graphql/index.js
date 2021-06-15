// Import Apollo Azure integration library
const { ApolloServer } = require('apollo-server-azure-functions');
const { typeDefs } = require('./graphqlTypes');
const { resolvers } = require('./graphqlQuery');

const server = new ApolloServer({ 
    typeDefs
    , resolvers
    , introspection: true
    , playground: true 
});
exports.graphqlHandler = server.createHandler();