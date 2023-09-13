# Sekawan Media Challenge
> See instructions [here]("/docs/tecnical-test-instruction.pdf")



## Repository Info
- Bun `v1.0.0`
- axios `v1.5.0`
- typescript `v4.4.3`
- tailwindcss `v5.1.6`
- vite `v4.4.7`
- other peer dependencies

### How to run in Dev Mode

```bash
bun install
bun run dev
```

Then open link displayed etc. <http://localhost:3000>.

### How to run in Production Build Mode

```bash
bun install
bun run build
bun run serve
```

Then open link displayed etc.  <http://localhost:4173>.

## Folder Structure

```
.
├── public                 - Public Assets
└── src/
    ├── components         - Global Reusable Components
    ├── pages              - All Pages
    ├── routes/            - Router Handling
    |    └──layout         - Base Layouting For Router
    ├── services           - All API Call
    └── types              - Global Types / Interfaces

```

## Pages Structure

```
.
└── PAGE_NAME/
    ├── components         - Local Components
    ├── hooks.ts           - Custom Hooks & Logic For Page
    └── index.tsx          - Page Component

```

## Deployment
- [x] Deployed to Vercel
- [ ] Deployed to Netlify


