import { z } from "zod";
import docker from "../../docker/client.js";

export const pullImageTool = {
    name: "docker.image.pull",

    description: "Pull a Docker image from a registry.",

    inputSchema: z.object({
        image: z.string().min(1),
    }),

    async execute(input: { image: string }) {
        return new Promise((resolve, reject) => {
            docker.pull(input.image, (err: any, stream: any) => {
                if (err) return reject(err);

                docker.modem.followProgress(
                    stream,
                    (error: any) => {
                        if (error) return reject(error);

                        resolve({
                            success: true,
                            image: input.image,
                            message: "Image pulled successfully.",
                        });
                    }
                );
            });
        });
    },
};
