# Advanced Todo Board

## Setup

1. Install Node.js 20+ and MongoDB (local or Atlas).
2. Copy `.env.example` to `.env.local` and set `MONGODB_URI`. Set `MONGODB_DB` optionally.
3. Run `npm install`, then `npm run dev` and open http://localhost:3000.

The app creates the `todos` collection automatically. Each record stores `title`, `description`, `priority`, `completed`, `createdAt`, and `updatedAt` as MongoDB values. Existing documents without `priority` are treated as medium in reads.

## Commands

- `npm run typecheck` checks TypeScript.
- `npm run build` creates the production build.
- `npm run start` serves the production build.

Search and filters are server-side and shareable through URL parameters. Mutations use Server Actions, and selection/bulk controls remain client-side for responsive interaction.
