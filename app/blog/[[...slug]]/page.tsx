type BlogPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug = [] } = await params;
  const path = slug.length ? `/${slug.join("/")}` : "/";

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-2xl rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-sky-300">Blog</h1>
        <p className="text-slate-200">You visited: {path}</p>
      </div>
    </main>
  );
}
