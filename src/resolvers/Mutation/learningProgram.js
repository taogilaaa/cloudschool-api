// @flow

function createLearningProgram(
  root: Root,
  args: {
    batchId: string,
    courseId: string,
    lecturerId: string,
    startDate: Date,
    endDate: Date,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.createLearningProgram(
    {
      data: {
        batch: {connect: {id: args.batchId}},
        course: {connect: {id: args.courseId}},
        lecturer: {connect: {id: args.lecturerId}},
        startDate: args.startDate,
        endDate: args.endDate,
      },
    },
    info,
  );
}

function updateLearningProgram(
  root: Root,
  args: {
    id: string,
    batchId?: string,
    courseId?: string,
    lecturerId?: string,
    startDate?: Date,
    endDate?: Date,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.updateLearningProgram(
    {
      data: {
        ...(args.batchId ? {batch: {connect: {id: args.batchId}}} : {}),
        ...(args.courseId ? {course: {connect: {id: args.courseId}}} : {}),
        ...(args.lecturerId
          ? {lecturer: {connect: {id: args.lecturerId}}}
          : {}),
        startDate: args.startDate,
        endDate: args.endDate,
      },
      where: {id: args.id},
    },
    info,
  );
}

function deleteLearningProgram(
  root: Root,
  args: {id: string},
  context: Context,
  info: Info,
) {
  return context.db.mutation.deleteLearningProgram(
    {where: {id: args.id}},
    info,
  );
}

export {createLearningProgram, updateLearningProgram, deleteLearningProgram};
