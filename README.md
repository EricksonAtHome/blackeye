# Belflat

Belflat is a [Payload CMS](https://payloadcms.com) website built with the official website template and Next.js.

## Stack

- **Payload CMS 3** — headless CMS and admin panel
- **Next.js** — React framework with App Router
- **SQLite** — local development database (switch to PostgreSQL for production)

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app:

- Website: [http://localhost:3000](http://localhost:3000)
- Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

On first visit to the admin panel, create your admin user account.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run generate:types` | Generate Payload TypeScript types |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | SQLite file path or PostgreSQL connection string |
| `PAYLOAD_SECRET` | Secret key for JWT encryption |
| `NEXT_PUBLIC_SERVER_URL` | Public site URL (no trailing slash) |
| `CRON_SECRET` | Secret for cron job authentication |
| `PREVIEW_SECRET` | Secret for draft preview requests |

## Production

For production, use PostgreSQL instead of SQLite:

```bash
DATABASE_URL=postgresql://user:password@host:5432/belflat
```

See the [Payload deployment docs](https://payloadcms.com/docs/production/deployment) for hosting options.

## Repository

https://github.com/belflat/WebApp.git
