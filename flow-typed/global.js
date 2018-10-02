// @flow
import type {GraphQLResolveInfo} from 'graphql';

declare type Root = Object;

//Temporary type before using graphql codegen to flow
declare type Context = {
  db: {
    query: Object,
    mutation: Object,
    exists: Object,
  },
};

declare type Info = GraphQLResolveInfo | string;
