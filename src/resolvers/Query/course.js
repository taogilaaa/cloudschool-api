// @flow

function course(root: Root, args: {id: string}, context: Context, info: Info) {
  return context.db.query.course({where: {id: args.id}}, info);
}

function courses(root: Root, args: Object, context: Context, info: Info) {
  return context.db.query.courses({}, info);
}

export {course, courses};
