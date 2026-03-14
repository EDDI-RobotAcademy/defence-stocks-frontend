# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Vite HMR)
npm run build      # Type-check and build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

No test framework is configured yet.

## Architecture

This is a React 19 + TypeScript + Vite SPA for a Defence Stocks platform.

### Feature-Based Clean Architecture

New features go under `features/<feature-name>/` with four layers:

- **ui/** — React components
- **domain/** — Business entities and logic
- **application/** — Use cases and orchestration
- **infrastructure/** — External API calls and services

Shared cross-feature code lives in top-level `ui/` and `infrastructure/` directories.

### Key Tech

- React 19, TypeScript 5.9 (strict mode), Vite 7, ESLint 9 (flat config)
- ESLint uses the v9 flat config format (`eslint.config.js`) — not legacy `.eslintrc`
- TypeScript strict mode is on: no unused locals/parameters, no implicit any
