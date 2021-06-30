import express from "express";
import helmet from "helmet";
import morgan from "morgan";
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
app.use(morgan("dev"));

/**
 * routes
 */
app.use(router);

/**
 * error middleware
 */
app.use(errorsMiddleware);

app.listen(3000, () => console.log("Server is running on port 3000"));
