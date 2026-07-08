# Belflat Residence

**Belflat Residence** is a Belgian housing and care portal built with [Payload CMS](https://payloadcms.com), featuring a navy professional design with bewonersportaal, help section, and resident services.

## Latest UI preview

### Homepage
![Belflat Residence homepage](docs/screenshots/belflat-residence-home.png)

### Bewonersportaal
![Belflat bewonersportaal](docs/screenshots/belflat-bewonersportaal.png)

### Hulp & contact
![Belflat hulp](docs/screenshots/belflat-hulp.png)

![Belflat admin login](docs/screenshots/belflat-admin-login.png)

## Public pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, news, FAQ, and resident quick actions |
| `/bewonersportaal` | Resident portal dashboard (berichten, zaken, gegevens) |
| `/hulp` | Help hub with FAQ and contact actions |
| `/admin` | Payload CMS admin panel |

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
