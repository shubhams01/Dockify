import { z } from "zod";
import docker from "../../docker/client.js";

export const execContainerTool = {

    name: "docker.container.exec",

    description:
        "Executes a command inside a running Docker container.",

    inputSchema: z.object({

        id: z.string().min(1),

        command: z.array(z.string()).min(1),

        attachStdout: z.boolean().default(true),

        attachStderr: z.boolean().default(true),

        tty: z.boolean().default(false),

    }),

    async execute(input: {

        id: string;

        command: string[];

        attachStdout?: boolean;

        attachStderr?: boolean;

        tty?: boolean;

    }) {

        const container = docker.getContainer(input.id);

        const exec = await container.exec({

            Cmd: input.command,

            AttachStdout: input.attachStdout,

            AttachStderr: input.attachStderr,

            Tty: input.tty,

        });

        const stream = await exec.start({
            hijack: true,
            stdin: false,
        });

        return new Promise((resolve, reject) => {

            let output = "";

            stream.on("data", (chunk: Buffer) => {
                output += chunk.toString();
            });

            stream.on("end", async () => {

                const result = await exec.inspect();

                resolve({
                    exitCode: result.ExitCode,
                    running: result.Running,
                    output,
                });

            });

            stream.on("error", reject);

        });

    },

};