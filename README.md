# Belflat

Belflat is a [Payload CMS](https://payloadcms.com) website built with the official website template and Next.js, backed by **Neon PostgreSQL**.

![Belflat homepage](docs/screenshots/belflat-home.png)

![Belflat admin login](docs/screenshots/belflat-admin-login.png)

![Belflat admin sign up](docs/screenshots/belflat-admin-signup.png)

## Stack

- **Payload CMS 3** — headless CMS and admin panel
- **Next.js** — React framework with App Router
- **Neon PostgreSQL** — serverless Postgres database

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables and set your Neon connection string:

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
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `PAYLOAD_SECRET` | Secret key for JWT encryption |
| `NEXT_PUBLIC_SERVER_URL` | Public site URL (no trailing slash) |
| `CRON_SECRET` | Secret for cron job authentication |
| `PREVIEW_SECRET` | Secret for draft preview requests |

Example `DATABASE_URL` format:

```bash
DATABASE_URL=postgresql://user:password@host/neondb?sslmode=require
```

## Production

The app is configured for Neon PostgreSQL. Set your production `DATABASE_URL`, `PAYLOAD_SECRET`, and `NEXT_PUBLIC_SERVER_URL` in your hosting provider's environment variables.

See the [Payload deployment docs](https://payloadcms.com/docs/production/deployment) for hosting options.

## Repository

https://github.com/belflat/WebApp.git
