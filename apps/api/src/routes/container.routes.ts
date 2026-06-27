import { Router } from "express";
import { listContainers } from "../controllers/container.controller";

const router = Router();

router.get("/", listContainers);

export default router;