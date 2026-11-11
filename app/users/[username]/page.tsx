type UserPageProps = {
  params: Promise<{ username: string }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-2xl rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-sky-300">
          Welcome, {username}
        </h1>
      </div>
    </main>
  );
}
