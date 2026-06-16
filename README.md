# MoonLeaf AB

MoonLeaf AB builds practical tools that help people understand, protect, and restore living
systems. This repository is the company home page: a single, fast marketing page that states our
vision, links to every current MoonLeaf project, and offers a short "Contact us" form. Our vision:
**technology in service of ecological conservation.**

## Live URL

https://www.moonleafearth.com — deploying soon (live once DNS is wired).

## Stack

Next.js App Router · Tailwind v4 · Resend · Vercel

## Local Dev

```sh
pnpm install
cp .env.example .env.local
pnpm dev
```

Fill `.env.local` with Resend credentials (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
`CONTACT_FROM_EMAIL`) to exercise the contact form locally.

## Projects

The home page links to every current MoonLeaf project:

- **Birdsong Göteborg** — https://birds.moonleafearth.com
- **Conservation Tech Newsfeed** — https://conservationtech.moonleafearth.com
- **VG Ansvar** — https://ansvar.moonleafearth.com
- **PatchWatch** — https://patchwatch.moonleafearth.com

Bookkeeping is intentionally not listed.

## Deploy

See [DEPLOY.md](./DEPLOY.md) for the manual launch runbook — Vercel project, env vars, domains,
DNS, and Resend domain verification.
