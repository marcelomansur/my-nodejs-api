import { Router } from "express";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ListComplimentsSenderController } from "../controllers/ListComplimentsSenderController";
import { ListComplimentsReceiverController } from "../controllers/ListComplimentsReceiverController";

import ensureAuthenticated from "../middlewares/ensureAuthenticate";

const router = Router();

/**
 * controllers
 */

const createComplimentController = new CreateComplimentController();
const listComplimentsSenderController = new ListComplimentsSenderController();
const listComplimentsReceiverController =
  new ListComplimentsReceiverController();

/**
 * routes
 */

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
