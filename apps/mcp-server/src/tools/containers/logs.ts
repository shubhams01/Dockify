import { z } from "zod";
import docker from "../../docker/client.js";

export const logsContainerTool = {
    name: "docker.container.logs",

    description: "Returns logs from a Docker container.",

    inputSchema: z.object({
        id: z.string().min(1),

        stdout: z.boolean().default(true),

        stderr: z.boolean().default(true),

        tail: z.union([
            z.literal("all"),
            z.number()
        ]).default(100),

        timestamps: z.boolean().default(false),

        since: z.number().optional(),

        until: z.number().optional(),
    }),

    async execute(input: {
        id: string;
        stdout?: boolean;
        stderr?: boolean;
        tail?: number | "all";
        timestamps?: boolean;
        since?: number;
        until?: number;
    }) {

        const container = docker.getContainer(input.id);

        const stream = await container.logs({
            stdout: input.stdout,
            stderr: input.stderr,
            tail: input.tail === "all" ? undefined : input.tail,
            timestamps: input.timestamps,
            since: input.since,
            until: input.until,
        } as any) as Buffer;

        return {
            containerId: input.id,
            logs: stream.toString("utf8"),
        };
    },
};
