import { listContainersTool } from "./list.js";
import { inspectContainerTool } from "./inspect.js";
import { startContainerTool } from "./start.js";
import { stopContainerTool } from "./stop.js";
import { restartContainerTool } from "./restart.js";
import { removeContainerTool } from "./remove.js";
import { logsContainerTool } from "./logs.js";
import { statsContainerTool } from "./stats.js";
import { execContainerTool } from "./exec.js";

export const containerTools = [
    listContainersTool,
    inspectContainerTool,
    startContainerTool,
    stopContainerTool,
    restartContainerTool,
    removeContainerTool,
    logsContainerTool,
    statsContainerTool,
    execContainerTool,
];
