import { Request, Response } from "express";
import { getContainers } from "../services/container.service";

export async function listContainers(req: Request, res: Response) {
  try {
    const containers = await getContainers();
    res.json(containers);
  } catch (err: any) {
    console.error("Docker Error:", err);

    res.status(500).json({
      message: "Failed to fetch containers",
      error: err.message,
      code: err.code,
    });
  }
}