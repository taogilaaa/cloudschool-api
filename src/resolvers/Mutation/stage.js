// @flow

function createStage(
  root: Root,
  args: {
    name: string,
    transcript: string,
    videoUrl: string,
    order: number,
    duration: number,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.createStage(
    {
      data: {
        name: args.name,
        transcript: args.transcript,
        videoUrl: args.videoUrl,
        order: args.order,
        duration: args.duration,
      },
    },
    info,
  );
}

function updateStage(
  root: Root,
  args: {
    id: string,
    name?: string,
    transcript?: string,
    videoUrl?: string,
    order?: number,
    duration?: number,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.updateStage(
    {
      data: {
        name: args.name,
        transcript: args.transcript,
        videoUrl: args.videoUrl,
        order: args.order,
        duration: args.duration,
      },
      where: {id: args.id},
    },
    info,
  );
}

function deleteStage(
  root: Root,
  args: {id: string},
  context: Context,
  info: Info,
) {
  return context.db.mutation.deleteStage({where: {id: args.id}}, info);
}

export {createStage, updateStage, deleteStage};
