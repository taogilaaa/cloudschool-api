// @flow
import {GraphQLServer} from 'graphql-yoga';
import {PORT} from './globals/constants';
import {db} from './globals/prisma';
import * as resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (req) => ({
    ...req,
    db,
  }),
});

server.start(
  {
    port: PORT,
    cors: {origin: true},
    endpoint: '/graphql',
    playground: '/playground',
  },
  () => console.log(`Server is running on localhost:${PORT}`),
);
