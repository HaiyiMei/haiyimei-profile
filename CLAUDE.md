# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

- `website/` — Personal website (Vite + React + TypeScript)
- `resume/` — Resume source files (planned)
- `notes/` — Notes and writing (planned)

## Package Management

### TypeScript: Use `bun` (never npm/yarn/pnpm)
- `bun install` - Install dependencies
- `bun add <package>` - Add a dependency
- `bun add -d <package>` - Add a dev dependency
- `bun remove <package>` - Remove a dependency
- `bun <file.ts>` - Run a TypeScript file directly (native TS support, no transpilation needed)
- `bun run <script>` - Run a script from package.json
- `bun test` - Run tests
- `bunx <command>` - Execute a package binary (like npx)

### Python: Use `uv` (never pip/python directly)
- `uv init` - Initialize a new project
- `uv add <package>` - Add a dependency
- `uv add --dev <package>` - Add a dev dependency
- `uv remove <package>` - Remove a dependency
- `uv sync` - Sync dependencies from pyproject.toml
- `uv run <command>` - Run a command in the virtual environment
- `uvx <command>` - Execute a tool (like pipx)
