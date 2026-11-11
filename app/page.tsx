import Link from "next/link";

const exercises = [
  {
    title: "Grouped Routes",
    href: "/notifications",
    description: "A route group hides its folder name from the URL.",
  },
  {
    title: "Dynamic User Route",
    href: "/users/alina",
    description: "Render the username from the URL.",
  },
  {
    title: "Catch-All Blog Route",
    href: "/blog/nextjs/route-groups",
    description: "Display all segments of the visited blog path.",
  },
  {
    title: "API User Profile",
    href: "/api/users/alina",
    description: "Return a JSON profile for the selected user.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Exercises</h1>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {exercises.map((exercise) => (
            <Link
              key={exercise.href}
              href={exercise.href}
              className="rounded-xl border border-slate-700 bg-slate-900 p-5 transition hover:border-sky-500 hover:bg-slate-800"
            >
              <div className="mb-2 text-lg font-semibold text-sky-300">
                {exercise.title}
              </div>
              <div className="text-sm text-slate-300">
                {exercise.description}
              </div>
            </Link>
          ))}
        </div>

        <section className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6">
          <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-emerald-300">
            <span aria-hidden="true">✓</span>
            Summary
          </h2>
          <p className="text-slate-200">
            This app demonstrates route groups, dynamic segments, catch-all
            routes, and API route parameters in Next.js.
          </p>
        </section>
      </div>
    </main>
  );
}
