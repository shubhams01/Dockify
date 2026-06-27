import { z } from "zod";

export const restartContainerTool = {
    name: "docker.container.restart",

    description: "Restarts a Docker container.",

    inputSchema: z.object({
        id: z.string().min(1),
        timeout: z.number().optional().default(10),
    }),

    async execute(input: { id: string; timeout?: number }) {
        const container = docker.getContainer(input.id);

        await container.restart({
            t: input.timeout ?? 10,
        });

        const details = await container.inspect();

        return {
            success: true,
            message: "Container restarted successfully.",
            id: details.Id,
            name: details.Name.replace("/", ""),
            state: details.State.Status,
            running: details.State.Running,
        };
    },
};