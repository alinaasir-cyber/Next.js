import Link from "next/link";

const exercises = [
  {
    title: "Server Component",
    href: "/products",
    description: "Fetch and display five product titles from DummyJSON.",
  },
  {
    title: "Client Component",
    href: "/counter",
    description: "Use a client-side button to update a counter.",
  },
  {
    title: "SSR Simulation",
    href: "/ssr",
    description: "Show the server time each time you refresh the page.",
  },
  {
    title: "Static Page",
    href: "/about",
    description: "Render static About Us content at build time.",
  },
  {
    title: "Streaming",
    href: "/streaming",
    description: "See a Suspense loading fallback while slow content streams.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Next.js App Router
        </p>
        <h1 className="mb-3 text-4xl font-bold">Exercise 2</h1>
        <p className="mb-8 text-slate-300">
          Complete these tasks in your own Next.js app.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {exercises.map((exercise, index) => (
            <Link
              key={exercise.href}
              href={exercise.href}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition hover:border-sky-500 hover:bg-slate-800"
            >
              <p className="mb-2 text-sm text-slate-400">
                Exercise {index + 1}
              </p>
              <h2 className="mb-2 text-xl font-semibold text-sky-300">
                {exercise.title}
              </h2>
              <p className="text-sm text-slate-300">{exercise.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
