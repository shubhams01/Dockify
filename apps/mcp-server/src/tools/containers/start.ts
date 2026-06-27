import { z } from "zod";

export const startContainerTool = {
    name: "docker.container.start",

    description: "Starts a stopped Docker container.",

    inputSchema: z.object({
        id: z.string().min(1),
    }),

    async execute(input: { id: string }) {
        const container = docker.getContainer(input.id);

        await container.start();

        const details = await container.inspect();

        return {
            success: true,
            message: "Container started successfully.",
            id: details.Id,
            name: details.Name.replace("/", ""),
            state: details.State.Status,
            running: details.State.Running,
        };
    },
};