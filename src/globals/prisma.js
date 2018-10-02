// @flow

import {Prisma} from 'prisma-binding';
import {
  DATABASE_SERVER,
  PRISMA_MANAGEMENT_API_SECRET,
  DEVELOPMENT,
} from './constants';

export const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: DATABASE_SERVER,
  secret: PRISMA_MANAGEMENT_API_SECRET,
  debug: DEVELOPMENT,
});
