// @flow

function user(root: Root, args: {id: string}, context: Context, info: Info) {
  return context.db.query.user({where: {id: args.id}}, info);
}

function users(root: Root, args: Object, context: Context, info: Info) {
  return context.db.query.users({}, info);
}

export {user, users};
