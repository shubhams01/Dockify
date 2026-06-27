import { z } from "zod";
import docker from "../../docker/client";

export const stopContainerTool = {
    name: "docker.container.stop",

    description: "Stops a running Docker container.",

    inputSchema: z.object({
        id: z.string().min(1),
        timeout: z.number().optional().default(10),
    }),

    async execute(input: { id: string; timeout?: number }) {
        const container = docker.getContainer(input.id);

        await container.stop({
            t: input.timeout ?? 10,
        });

        const details = await container.inspect();

        return {
            success: true,
            message: "Container stopped successfully.",
            id: details.Id,
            name: details.Name.replace("/", ""),
            state: details.State.Status,
            running: details.State.Running,
        };
    },
};