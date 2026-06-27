# <h3 align="center">Dockify</h3>

<p align="center">
  <strong>AI-Native Docker Management Platform powered by the Model Context Protocol (MCP)</strong>
</p>

<p align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge\&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=for-the-badge\&logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Engine-2496ED?style=for-the-badge\&logo=docker)
![MCP](https://img.shields.io/badge/MCP-Compatible-orange?style=for-the-badge)

</p>

---

## 📖 Overview

Dockify is an **AI-first Docker management platform** that exposes Docker as an **MCP (Model Context Protocol) Server**.

Instead of memorizing Docker CLI commands, developers can interact with Docker using natural language through AI assistants such as:

* ChatGPT
* Claude Desktop
* GitHub Copilot
* OpenAI Codex
* Cursor
* Windsurf

---

# ✨ Features

## 📦 Container Management

* List Containers
* Inspect Containers
* Start Containers
* Stop Containers
* Restart Containers
* Pause Containers
* Resume Containers
* Remove Containers
* Rename Containers
* Execute Commands
* Stream Logs
* Live Statistics

---

## 🖼 Image Management

* List Images
* Inspect Images
* Pull Images
* Remove Images
* Tag Images
* Image History
* Search Registries

---

## 🤖 AI Ready

Examples:

```text
List all running containers

Start nginx

Restart Redis

Pull node:22

Explain why my container keeps restarting

Analyze container logs
```

---

# 🏗 Architecture

```text
                AI Assistant

 Claude | ChatGPT | Copilot | Cursor | Codex

                    │
                    ▼

             Dockify MCP Server

                    │

          Docker Service Layer

                    │

            Docker Engine API

                    │

              Docker Engine
```

---

# 📁 Repository Structure

```text
Dockify/

├── apps/
│   ├── api/
│   └── mcp-server/
│
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## MCP Server Structure

```text
apps/mcp-server

src/

├── config/

├── docker/

├── prompts/

├── resources/

├── schemas/

├── tools/
│   ├── containers/
│   └── images/
│
├── types/

├── utils/

└── server.ts
```

---

# 🛠 Technology Stack

| Technology     | Purpose    |
| -------------- | ---------- |
| TypeScript     | Language   |
| Node.js        | Runtime    |
| Dockerode      | Docker SDK |
| MCP SDK        | MCP Server |
| Zod            | Validation |
| npm Workspaces | Monorepo   |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/shubhams01/dockify.git

cd dockify
```

---

## Install Dependencies

```bash
npm install
```

---

## Start MCP Server

```bash
npm run mcp
```

or

```bash
cd apps/mcp-server

npm run dev
```

---

# 🔌 Connect to MCP Clients

Dockify is designed to work with any MCP-compatible client.

Supported:

* Claude Desktop
* OpenAI Codex
* GitHub Copilot
* Cursor
* Windsurf

---

# 📦 Implemented Tools

## Containers

| Tool                     | Status |
| ------------------------ | ------ |
| docker.container.list    | ✅      |
| docker.container.inspect | ✅      |
| docker.container.start   | ✅      |
| docker.container.stop    | ✅      |
| docker.container.restart | ✅      |
| docker.container.remove  | ✅      |
| docker.container.logs    | 🚧     |
| docker.container.stats   | 🚧     |
| docker.container.exec    | 🚧     |

---

## Images

| Tool                 | Status |
| -------------------- | ------ |
| docker.image.list    | 🚧     |
| docker.image.inspect | 🚧     |
| docker.image.pull    | 🚧     |
| docker.image.remove  | 🚧     |
| docker.image.tag     | 🚧     |

---

# 🎯 Vision

Dockify aims to become the **AI-native operating layer for container platforms**.

Every Docker capability will be implemented once and exposed through:

* MCP Server
* REST API
* Web Dashboard
* CLI
* Automation Workflows

---

<p align="center">

**Built with ❤️ for Docker Developers**

**Dockify — Manage Docker with AI.**

</p>
