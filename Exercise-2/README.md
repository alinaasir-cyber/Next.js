# Exercise 2

This Next.js app demonstrates server components, client components, dynamic
server rendering, and static pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and choose an exercise:

- `/products` fetches and lists five product titles from DummyJSON in a Server
  Component.
- `/counter` renders a client-side counter inside a Server Component page.
- `/ssr` renders the current server time on each request.
- `/about` is a statically rendered page.
- `/streaming` displays a Suspense fallback while a Server Component waits
  three seconds before rendering its content.
