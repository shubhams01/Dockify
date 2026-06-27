import { z } from "zod";
import docker from "../../docker/client";

export const removeContainerTool = {
    name: "docker.container.remove",

    description: "Removes a Docker container.",

    inputSchema: z.object({
        id: z.string().min(1),
        force: z.boolean().default(false),
        removeVolumes: z.boolean().default(false),
    }),

    async execute(input: {
        id: string;
        force?: boolean;
        removeVolumes?: boolean;
    }) {
        const container = docker.getContainer(input.id);

        await container.remove({
            force: input.force ?? false,
            v: input.removeVolumes ?? false,
        });

        return {
            success: true,
            message: "Container removed successfully.",
            id: input.id,
        };
    },
};