# AI App Starter Template

A React TypeScript template optimized for AI-assisted development.

## Stack

- Vite
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- React Router
- TanStack Query
- ESLint
- pnpm

## Quick Start

```bash
pnpm install
pnpm dev
```

Development server runs at [http://localhost:5174](http://localhost:5174)

## Project Structure

```
src/
├── components/         # Reusable UI components
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── App.tsx             # Main App component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Configuration

Path alias: `@/` points to `src/`

## Adding shadcn/ui Components

```bash
npx shadcn-ui@latest add [component-name]
```