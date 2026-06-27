import Docker from "dockerode";

const docker = new Docker({
    socketPath: process.env.DOCKER_SOCKET || "/var/run/docker.sock",
});

export default docker;