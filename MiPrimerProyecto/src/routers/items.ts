import { Router } from "express";
import {
  getItem,
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../controllers/items";
import logMiddleware from "../middleware/log";

const router = Router();

// http://localhost:3000/items [GET|POST|PUT|DELETE]
router.get("/:id", logMiddleware, getItem);
router.get("/", logMiddleware, getItems);
router.post("/", logMiddleware, addItem);
router.put("/:id", logMiddleware, updateItem);
router.delete("/:id", logMiddleware, deleteItem);

export { router };
