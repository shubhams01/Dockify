import { z } from "zod";
import docker from "../../docker/client.js";

export const tagImageTool = {
    name: "docker.image.tag",

    description: "Tag a Docker image.",

    inputSchema: z.object({
        id: z.string().min(1),
        repo: z.string().min(1),
        tag: z.string().default("latest"),
    }),

    async execute(input: {
        id: string;
        repo: string;
        tag: string;
    }) {
        const image = docker.getImage(input.id);

        await image.tag({
            repo: input.repo,
            tag: input.tag,
        });

        return {
            success: true,
            repository: input.repo,
            tag: input.tag,
        };
    },
};
