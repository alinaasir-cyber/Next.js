"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900 p-6">
      <p className="mb-4 text-4xl font-bold tabular-nums text-sky-300">
        {count}
      </p>
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
        className="rounded-lg bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
      >
        Increment
      </button>
    </section>
  );
}
