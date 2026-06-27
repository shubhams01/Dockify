import { z } from "zod";
import docker from "../../docker/client.js";

export const removeImageTool = {
    name: "docker.image.remove",

    description: "Remove a Docker image.",

    inputSchema: z.object({
        id: z.string().min(1),
        force: z.boolean().default(false),
        noPrune: z.boolean().default(false),
    }),

    async execute(input: {
        id: string;
        force?: boolean;
        noPrune?: boolean;
    }) {
        const image = docker.getImage(input.id);

        await image.remove({
            force: input.force,
            noprune: input.noPrune,
        });

        return {
            success: true,
            image: input.id,
        };
    },
};
