export default async function SlowComponent() {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 3000);
  });

  return (
    <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-200">
      Slow content loaded after three seconds.
    </p>
  );
}
