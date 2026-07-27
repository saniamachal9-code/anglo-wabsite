# Anglo Sanskrit Senior Secondary School, Pundri

Public-facing school website for Anglo Sanskrit Senior Secondary School, Pundri, with information about the school's heritage, academics, admissions, facilities, gallery, and contact details.

## Run & Operate

- `pnpm install` — install the workspace dependencies after importing or cloning
- `pnpm --filter @workspace/arya-school run dev` — run the public website
- `pnpm --filter @workspace/api-server run dev` — run the API server when a database is available
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Website env: `PORT` and `BASE_PATH` are provided by the web artifact workflow
- API env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/arya-school/src/pages/` — website pages
- `artifacts/arya-school/src/components/layout/` — shared navbar, layout, and footer
- `artifacts/arya-school/src/index.css` — color tokens, typography, and global styles
- `artifacts/api-server/src/` — Express API service
- `lib/db/src/schema/` — database schema source of truth
- `lib/api-spec/openapi.yaml` — API contract source of truth

## Architecture decisions

- The public website is a standalone Vite artifact and does not require the API or database to render its pages.
- The website keeps the imported pnpm workspace structure and uses Wouter for client-side page routing.
- School imagery is loaded from the workspace's attached assets so the site remains self-contained.

## Product

Visitors can learn about Anglo Sanskrit Senior Secondary School, Pundri, explore its academic and campus offerings, review admission information, browse the gallery, and contact the school.

## User preferences

The user prefers a normal, visible website presentation with a navbar, hero section, content sections, and footer rather than a code-like or canvas-only view.

## Gotchas

- The API workflow will not start until `DATABASE_URL` is provisioned.
- After importing the workspace from a zip, run `pnpm install` before starting any artifact workflow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
