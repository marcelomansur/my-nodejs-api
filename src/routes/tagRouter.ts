import { Router } from "express";

import { ListTagsController } from "../controllers/ListTagsController";
import { CreateTagController } from "../controllers/CreateTagController";

import ensureAdmin from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticate";

const router = Router();

/**
 * controllers
 */
const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

/**
 * routes
 */
/* tags */
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

export { router };
