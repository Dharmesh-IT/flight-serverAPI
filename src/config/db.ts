import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config({ path: __dirname + '/.env' });


export const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
export default config;
export const dialect = "postgres";
