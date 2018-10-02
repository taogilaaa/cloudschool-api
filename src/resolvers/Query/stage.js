// @flow

function stage(root: Root, args: {id: string}, context: Context, info: Info) {
  return context.db.query.stage({where: {id: args.id}}, info);
}

function stages(root: Root, args: Object, context: Context, info: Info) {
  return context.db.query.stages({}, info);
}

export {stage, stages};
