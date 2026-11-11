import { Suspense } from "react";
import SlowComponent from "@/components/SlowComponent";

export const dynamic = "force-dynamic";

export default function StreamingPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-sky-300">
          Streaming with Suspense
        </h1>
        <p className="mb-6 text-slate-300">
          The fallback appears while the server prepares the slow content.
        </p>
        <Suspense
          fallback={
            <p className="animate-pulse rounded-lg border border-slate-700 bg-slate-900 p-5 text-slate-300">
              Loading...
            </p>
          }
        >
          <SlowComponent />
        </Suspense>
      </div>
    </main>
  );
}
