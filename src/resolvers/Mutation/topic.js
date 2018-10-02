// @flow

function createTopic(
  root: Root,
  args: {
    name: string,
    order: number,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.createTopic(
    {
      data: {
        name: args.name,
        order: args.order,
      },
    },
    info,
  );
}

function updateTopic(
  root: Root,
  args: {
    id: string,
    name?: string,
    order?: number,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.updateTopic(
    {
      data: {
        name: args.name,
        order: args.order,
      },
      where: {id: args.id},
    },
    info,
  );
}

function deleteTopic(
  root: Root,
  args: {id: string},
  context: Context,
  info: Info,
) {
  return context.db.mutation.deleteTopic({where: {id: args.id}}, info);
}

export {createTopic, updateTopic, deleteTopic};
