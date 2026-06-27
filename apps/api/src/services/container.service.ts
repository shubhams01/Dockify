import docker from "../config/docker";

export async function getContainers() {
    return docker.listContainers({
        all: true
    });
}