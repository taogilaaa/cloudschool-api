// @flow
import * as batch from './batch';
import * as course from './course';
import * as learningProgram from './learningProgram';
import * as stage from './stage';
import * as topic from './topic';
import * as user from './user';

export default {
  ...batch,
  ...course,
  ...learningProgram,
  ...stage,
  ...topic,
  ...user,
};
