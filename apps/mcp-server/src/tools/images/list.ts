import { z } from "zod";
import docker from "../../docker/client.js";

export const listImagesTool = {
    name: "docker.image.list",

    description: "List all Docker images.",

    inputSchema: z.object({
        all: z.boolean().default(true),
    }),

    async execute(input: { all?: boolean }) {
        const images = await docker.listImages({
            all: input.all,
        });

        return images.map((image: any) => ({
            id: image.Id,
            parentId: image.ParentId,
            repoTags: image.RepoTags,
            repoDigests: image.RepoDigests,
            created: image.Created,
            size: image.Size,
            sharedSize: image.SharedSize,
            virtualSize: image.VirtualSize,
            labels: image.Labels,
        }));
    },
};
