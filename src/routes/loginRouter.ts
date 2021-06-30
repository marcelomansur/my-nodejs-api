import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const router = Router();

/**
 * controllers
 */

const authenticateUserController = new AuthenticateUserController();

/**
 * routes
 */

router.post("/login", authenticateUserController.handle);

/* root route */
router.get("/", (req, res) => {
  res.send("Hello API");
});

export { router };
