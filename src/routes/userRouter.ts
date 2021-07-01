import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";

import ensureAdmin from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticate";

const router = Router();

/**
 * controllers
 */
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

/**
 * routes
 */
router.get("/users", ensureAuthenticated, listUsersController.handle);
router.post("/users", createUserController.handle);
router.put(
  "/user/:id",
  ensureAuthenticated,
  ensureAdmin,
  updateUserController.handle
);
router.delete(
  "/user/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteUserController.handle
);

export { router };
