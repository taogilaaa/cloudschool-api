// @flow

function learningProgram(
  root: Root,
  args: {id: string},
  context: Context,
  info: Info,
) {
  return context.db.query.learningProgram({where: {id: args.id}}, info);
}

function learningPrograms(
  root: Root,
  args: Object,
  context: Context,
  info: Info,
) {
  return context.db.query.learningPrograms({}, info);
}

export {learningProgram, learningPrograms};
