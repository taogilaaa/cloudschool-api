// @flow

function topic(root: Root, args: {id: string}, context: Context, info: Info) {
  return context.db.query.topic({where: {id: args.id}}, info);
}

function topics(root: Root, args: Object, context: Context, info: Info) {
  return context.db.query.topics({}, info);
}

export {topic, topics};
