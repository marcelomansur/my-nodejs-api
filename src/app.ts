import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";
/* typeorm dependency */
import "reflect-metadata";

import "./database";
import { loginRouter, userRouter, tagRouter, complimentRouter } from "./routes";
import errorsMiddleware from "./middlewares/errorsMiddleware";
import swaggerDocument from "./docs/swagger.json";
const app = express();

/**
 * middlewares
 */
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * routes
 */
app.use(loginRouter);
app.use(userRouter);
app.use(tagRouter);
app.use(complimentRouter);

/**
 * error middleware
 */
app.use(errorsMiddleware);

export { app };
