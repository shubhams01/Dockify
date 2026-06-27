import { listContainersTool } from "./list";
import { inspectContainerTool } from "./inspect";
import { startContainerTool } from "./start";
import { stopContainerTool } from "./stop";
import { restartContainerTool } from "./restart";
import { removeContainerTool } from "./remove";

export const containerTools = [
    listContainersTool,
    inspectContainerTool,
    startContainerTool,
    stopContainerTool,
    restartContainerTool,
    removeContainerTool,
];

export {
    listContainersTool,
    inspectContainerTool,
    startContainerTool,
    stopContainerTool,
    restartContainerTool,
    removeContainerTool,
};