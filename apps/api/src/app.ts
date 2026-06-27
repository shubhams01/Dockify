import express from "express";
import cors from "cors";
import morgan from "morgan";

import containerRoutes from "./routes/container.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/containers", containerRoutes);

export default app;