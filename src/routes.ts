import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListComplimentsSenderController } from "./controllers/ListComplimentsSenderController";
import { ListComplimentsReceiverController } from "./controllers/ListComplimentsReceiverController";
import ensureAdmin from "./middlewares/ensureAdmin";
import ensureAuthenticated from "./middlewares/ensureAuthenticate";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

/**
 * controllers
 */

/* login */
const authenticateUserController = new AuthenticateUserController();
/* users */
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
/* tags */
const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();
/* compliments */
const createComplimentController = new CreateComplimentController();
const listComplimentsSenderController = new ListComplimentsSenderController();
const listComplimentsReceiverController =
  new ListComplimentsReceiverController();

/**
 * routes
 */

/* login */
router.post("/login", authenticateUserController.handle);
/* users */
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
/* tags */
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
/* compliments */
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/listSender",
  ensureAuthenticated,
  listComplimentsSenderController.handle
);
router.get(
  "/listReceiver",
  ensureAuthenticated,
  listComplimentsReceiverController.handle
);

export { router };
