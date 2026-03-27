# Soulfest Context & AI Memory

## Core Objective
Soulfest is a music festival platform encompassing a public site, a ticketing system, and an admin portal. 

## Technical Architecture
- **Monorepo**: Turborepo inside npm workspaces.
- **Frontend Applications**: Next.js App Router for `public-site`, `ticketing-app`, and `admin-portal`.
- **UI System**: `shadcn/ui` with Tailwind CSS, utilizing Framer Motion for highly-polished, premium glassmorphic animations and a "WOW" experience.
- **Backend & DB**: Appwrite for authentication/DB, linked via a Node.js `api-server` or direct shared client.
- **Payments**: Initial support for manual bank slip uploads, to be transitioned to Stripe/eGHL later.

## Important Notes for AI Agents
- Always maintain vibrant, festival-appropriate aesthetics.
- Animations and transitions should be fluid but not overwhelming (glassmorphism/blur effects, hover states).
- Shared React/Tailwind/shadcn logic resides in `packages/ui-core`.
- Shared Appwrite database client logic resides in `packages/core-logic`.

## Progress Log
- **[Init]**: Monorepo workspace (Turborepo + NPM) configured. AI memory context `.agent` established.
- **[Apps Scaffolded]**: `public-site`, `admin-portal`, and `ticketing-app` Next.js apps fully scaffolded.
- **[Packages Scaffolded]**: `ui-core` (Tailwind preset, shadcn utils) and `core-logic` (Appwrite clients) created and linked via `npm install`.
- **[Dev Environment]**: Root `README.md` updated, Turborepo helper scripts added to `package.json`, and `.env.example` boilerplate generated.
- **[Phase 1 Complete - Commit Checkpoint]**: The monorepo architecture is fully established and ready for an initial git commit.
- **[Next - Phase 2]**: Await Appwrite credentials to initialize the database connections and begin building out the API schemas and user interfaces.
