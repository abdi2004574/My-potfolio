# Portfolio Setup Guide

## Prerequisites

You need to install Node.js before running this project.

### Install Node.js

1. Download from: https://nodejs.org ( LTS version recommended )
2. Run the installer
3. Restart your terminal

## Quick Start

Open a new terminal in this folder and run:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Project Data Guide

Edit `lib/constants.ts` to add your own:
- Stats (years, projects, etc.)
- Project details (name, description, tech stack, URLs)
- Social links (GitHub, LinkedIn, etc.)
- Hero content

### Adding Project Images

1. Create folder: `public/images/`
2. Add your project screenshots (WebP format)
3. Update imageUrl in `constants.ts`

## Commands

| Command | Description |
|---------|-----------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run lint` | Check code errors |
| `npm run preview` | Preview production build |

## Troubleshooting

### "npm not found"
- Install Node.js from https://nodejs.org

### Port 3000 in use
- Change port in command: `npm run dev -- -p 3001`