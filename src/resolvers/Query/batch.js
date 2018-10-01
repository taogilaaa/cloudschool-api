// @flow

function batch(root: Root, args: {id: string}, context: Context, info: Info) {
  return context.db.query.batch({where: {id: args.id}}, info);
}

function batches(root: Root, args: Object, context: Context, info: Info) {
  return context.db.query.batches({}, info);
}

export {batch, batches};
