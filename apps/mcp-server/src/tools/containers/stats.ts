import { z } from "zod";
import docker from "../../docker/client.js";

export const statsContainerTool = {
    name: "docker.container.stats",

    description: "Returns live statistics for a Docker container.",

    inputSchema: z.object({
        id: z.string().min(1),
    }),

    async execute(input: { id: string }) {

        const container = docker.getContainer(input.id);

        const stats = await container.stats({
            stream: false,
        });

        return {
            id: input.id,

            cpu: stats.cpu_stats,

            memory: stats.memory_stats,

            networks: stats.networks,

            blkio: stats.blkio_stats,

            pids: stats.pids_stats,
        };
    },
};
