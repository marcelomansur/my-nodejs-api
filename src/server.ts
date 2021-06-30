import express, { Request, Response, NextFunction, response } from "express";
import helmet from "helmet";
import "reflect-metadata";
import "express-async-errors";

import { router } from "./routes";
import "./database";
import errorsMiddleware from "./middlewares/errorsMiddleware";
const app = express();

/**
 * middlewares
 */
app.use(helmet());
app.use(express.json());
app.use(router);

/**
 * error middleware
 */
app.use(errorsMiddleware);

app.listen(3000, () => console.log("Server is running on port 3000"));
