# GitHub Copilot Instructions

This is a React-based portfolio website that simulates the macOS GUI with functional desktop environment, apps, and window management.

## Architecture Overview

**Core Pattern**: Configuration-driven app system where each app is defined in `src/configs/apps.tsx` with window properties, content components, and behavior flags.

**State Management**: Single Zustand store (`src/stores/index.ts`) combining three slices:
- `dock.ts`: Manages open/minimized apps, z-index stacking
- `system.ts`: Controls dark mode, volume, brightness, wifi, fullscreen
- `user.ts`: Handles user preferences

**Window System**: All apps extend `AppWindow.tsx` using `react-rnd` for dragging/resizing with native macOS traffic light controls.

## Development Patterns

**Path Aliases**: Always use `~/` for src imports: `import { appBarHeight } from "~/utils"`

**Auto-imports**: React hooks, custom hooks from `src/hooks`, store hooks, and components are auto-imported via `unplugin-auto-import`.

**App Registration**: 
1. Create component in `src/components/apps/`
2. Add lazy import and config object to `src/configs/apps.tsx`
3. Set window dimensions, positioning, and desktop/dock visibility

**Store Access**: Use `useStore()` with property selectors:
```typescript
const { dark, toggleDark } = useStore((state) => ({ dark: state.dark, toggleDark: state.toggleDark }));
```

## Key Files

- `src/configs/apps.tsx`: App definitions with window properties
- `src/components/AppWindow.tsx`: Base draggable window component  
- `src/stores/slices/`: Zustand state management
- `src/configs/portfolio/`: Portfolio data structure
- `src/utils/`: Screen utilities and constants
- `vite.config.ts`: Auto-import setup and path aliases

## Commands

```bash
pnpm dev      # Start with hot reload
pnpm build    # Production build
pnpm serve    # Preview build
pnpm lint     # ESLint check
```

**Package Manager**: Always use `pnpm@9.0.6`, never npm/yarn.

## UI Conventions

**Styling**: UnoCSS utility classes + CSS modules in `src/styles/`
**Dark Mode**: Managed via system store, automatically toggles `dark` class on documentElement
**Positioning**: Use percentage-based positioning for responsive windows
**Native Feel**: Maintain macOS-like interactions - double-click to maximize, proper traffic light behavior

## Portfolio Content

Portfolio data lives in `src/configs/portfolio/` with structured TypeScript interfaces. Content is markdown-based with proper typing for projects, skills, and experience sections.
