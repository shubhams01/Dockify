import { z } from "zod";
import docker from "../../docker/client.js";

export const inspectImageTool = {
    name: "docker.image.inspect",

    description: "Inspect a Docker image.",

    inputSchema: z.object({
        id: z.string().min(1),
    }),

    async execute(input: { id: string }) {
        const image = docker.getImage(input.id);

        return await image.inspect();
    },
};
