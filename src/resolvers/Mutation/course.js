// @flow

function createCourse(
  root: Root,
  args: {
    name: string,
    description: string,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.createCourse(
    {
      data: {
        name: args.name,
        description: args.description,
      },
    },
    info,
  );
}

function updateCourse(
  root: Root,
  args: {
    id: string,
    name?: string,
    description?: string,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.updateCourse(
    {
      data: {
        name: args.name,
        description: args.description,
      },
      where: {id: args.id},
    },
    info,
  );
}

function deleteCourse(
  root: Root,
  args: {id: string},
  context: Context,
  info: Info,
) {
  return context.db.mutation.deleteCourse({where: {id: args.id}}, info);
}

export {createCourse, updateCourse, deleteCourse};
