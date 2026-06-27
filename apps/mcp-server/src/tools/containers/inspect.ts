import { z } from "zod";
import docker from "../../docker/client";

export const inspectContainerTool = {
    name: "docker.container.inspect",

    description:
        "Returns detailed information about a Docker container.",

    inputSchema: z.object({
        id: z.string().min(1),
    }),

    async execute(input: { id: string }) {
        const container = docker.getContainer(input.id);

        return await container.inspect();
    },
};