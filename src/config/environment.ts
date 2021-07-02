import dotenv from "dotenv";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
const result = dotenv.config({
  path: process.env.NODE_ENV === "prod" ? ".env" : ".env.dev",
});
