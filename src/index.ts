import './config/otel-setup';
import "reflect-metadata";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import authRouter from "./v1/routes/auth";
import userRouter from "./v1/routes/User";
import { errorHandler } from "./middlewares/error.middleware";
import { logger } from "./utils/logger/logger";
import pinoHttp from 'pino-http';
import { Database } from "./config";

import { container } from './config/inversify.config';


const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(pinoHttp({ logger }));

// *** Routes ***
app.use(bodyParser.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);


// Error handling
app.use(errorHandler);

const start = async (): Promise<void> => {

  try {
    const db = new Database();
    if (db.sequelize) {
      await db.sequelize.sync();
    }
    app.listen(PORT, async () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }

};
start();
