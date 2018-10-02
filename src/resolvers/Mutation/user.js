// @flow

function createUser(
  root: Root,
  args: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    photoUrl: string,
    type: string,
    active: boolean,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.createUser(
    {
      data: {
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
        photoUrl: args.photoUrl,
        type: args.type,
        active: args.active,
      },
    },
    info,
  );
}

function updateUser(
  root: Root,
  args: {
    email: string,
    firstName?: string,
    lastName?: string,
    password?: string,
    photoUrl?: string,
    type?: string,
    active?: boolean,
  },
  context: Context,
  info: Info,
) {
  return context.db.mutation.updateUser(
    {
      data: {
        firstName: args.firstName,
        lastName: args.lastName,
        password: args.password,
        photoUrl: args.photoUrl,
        type: args.type,
        active: args.active,
      },
      where: {email: args.email},
    },
    info,
  );
}

export {createUser, updateUser};
