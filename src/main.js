import {GraphQLServer} from 'graphql-yoga';
import {PORT} from './globals/constants';

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, {name}) => `Hello ${name || 'World'}`,
  },
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start(
  {
    port: PORT,
    cors: {origin: true},
    endpoint: '/graphql',
    playground: '/playground',
  },
  () => console.log(`Server is running on localhost:${PORT}`),
);
