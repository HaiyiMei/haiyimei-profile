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

## Cursor Cloud specific instructions

### Services

| Service | Path | Run Command |
|---------|------|-------------|
| Website (Vite dev) | `website/` | `bun run dev` |

This is a single-service repo: a static personal portfolio site with no backend or database.

### Running the website

- Dev server: `cd website && bun run dev` (defaults to port 5173)
- To bind to all interfaces: `bun run dev --host 0.0.0.0`
- Build: `cd website && bun run build` (outputs to `website/dist/`)
- Lint: `cd website && bun run lint`

### Notes

- Bun must be installed (`curl -fsSL https://bun.sh/install | bash`). It is **not** pre-installed in the Cloud Agent VM image.
- ESLint has 2 pre-existing `react-refresh/only-export-components` errors in `badge.tsx` and `button.tsx`; these are in the existing code and can be ignored.
- No automated test suite exists yet (`bun test` will find no test files).
- All portfolio data is hardcoded in `website/src/data/portfolio.ts` — there are no API calls or external data sources.
