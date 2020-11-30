const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi:() => 'Hello GraphQL'
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 8964 }).then(res =>{
  console.log(`Server runntion at ${res.url}`)
})

/*
query{
  sayHi
}
*/