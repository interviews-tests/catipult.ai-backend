/**
 * Configuration variables.
 * @module config
 */

import "dotenv/config";

export default {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  PORT: process.env.PORT,
};
