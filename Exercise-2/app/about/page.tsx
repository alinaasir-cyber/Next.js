export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <article className="mx-auto max-w-2xl rounded-xl border border-slate-700 bg-slate-900 p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Static page
        </p>
        <h1 className="mb-4 text-3xl font-bold text-sky-300">About Us</h1>
        <p className="text-slate-300">
          We build useful web experiences with Next.js. This content is rendered
          statically at build time.
        </p>
      </article>
    </main>
  );
}
