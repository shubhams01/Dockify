import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { containerTools } from "./tools/containers/index.js";
import { imageTools } from "./tools/images/index.js";

async function bootstrap() {
  const server = new McpServer({
    name: "dockify",
    version: "1.0.0",
  });

  // Register Container Tools
  for (const tool of containerTools) {
    server.tool(
      tool.name,
      tool.description,
      tool.inputSchema.shape as any,
      async (args: any) => {
        try {
          const result = await tool.execute(args);

          return {
            content: [
              {
                type: "text" as const,
                text: JSON.stringify(result, null, 2),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text" as const,
                text:
                  error instanceof Error
                    ? error.message
                    : "Unknown error",
              },
            ],
            isError: true,
          };
        }
      }
    );
  }

  // Register Image Tools
  for (const tool of imageTools) {
    server.tool(
      tool.name,
      tool.description,
      tool.inputSchema.shape as any,
      async (args: any) => {
        try {
          const result = await tool.execute(args);

          return {
            content: [
              {
                type: "text" as const,
                text: JSON.stringify(result, null, 2),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text" as const,
                text:
                  error instanceof Error
                    ? error.message
                    : "Unknown error",
              },
            ],
            isError: true,
          };
        }
      }
    );
  }

  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error("Dockify MCP Server started");
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
