// @flow

function createBatch(
  root: Root,
  args: {
    name: string,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.createBatch(
    {
      data: {
        name: args.name,
      },
    },
    info,
  );
}

function updateBatch(
  root: Root,
  args: {
    id: string,
    name?: string,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.updateBatch(
    {
      data: {
        name: args.name,
      },
      where: {id: args.id},
    },
    info,
  );
}

function deleteBatch(
  root: Root,
  args: {id: string},
  context: Context,
  info: Info,
) {
  return context.db.mutation.deleteBatch({where: {id: args.id}}, info);
}

export {createBatch, updateBatch, deleteBatch};
