// @flow
require('dotenv').load();

export let PORT = process.env.PORT || 4000;
export let DATABASE_SERVER = process.env.DATABASE_SERVER || '';
export let PRISMA_MANAGEMENT_API_SECRET =
  process.env.PRISMA_MANAGEMENT_API_SECRET || '';
export let DEVELOPMENT = process.env.NODE_ENV === 'PRODUCTION' ? false : true;
