const { users } = require('./data');
// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        books: () => {
            return [
                {
                    "title": "The Trusted Advisor",
                    "author": {
                        "name": "Gaurav Madaan"
                    }
                },
            ]
        },
        users:() => {
            return users;
        }
    },
};

module.exports = {resolvers};