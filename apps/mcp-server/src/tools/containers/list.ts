import { z } from "zod";

export const listContainersTool = {
    name: "docker.container.list",

    description:
        "Returns all Docker containers including running and stopped containers.",

    inputSchema: z.object({
        all: z.boolean().default(true),
    }),

    async execute(input: { all: boolean }) {
        const containers = await docker.listContainers({
            all: input.all,
        });

        return containers.map((container) => ({
            id: container.Id,
            name: container.Names?.[0]?.replace("/", "") ?? "",
            image: container.Image,
            imageId: container.ImageID,
            command: container.Command,
            created: container.Created,
            state: container.State,
            status: container.Status,
            ports: container.Ports,
            labels: container.Labels,
        }));
    },
};