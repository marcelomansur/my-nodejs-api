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
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listComplimentsSenderController = new ListComplimentsSenderController();
const listComplimentsReceiverController =
  new ListComplimentsReceiverController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

/**
 * routes
 */
router.post("/login", authenticateUserController.handle);
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
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
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
