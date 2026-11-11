import Counter from "@/components/Counter";

export default function CounterPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-sky-300">
          Client Component
        </h1>
        <p className="mb-6 text-slate-300">
          This Server Component page renders an interactive client counter.
        </p>
        <Counter />
      </div>
    </main>
  );
}
