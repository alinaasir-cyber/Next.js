import {
  EmailForm,
  NameForm,
  PasswordForm,
} from "@/components/ActionForm";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Next.js App Router
        </p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Server Action Forms
        </h1>
        <p className="mb-9 text-slate-300">
          Practice submitting forms with Next.js Server Actions.
        </p>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
            <h2 className="mb-5 text-2xl font-semibold">Basic Form</h2>
            <p className="mb-5 text-slate-300">
              Submit an email. The Server Action logs it on the server and
              displays a thank-you message.
            </p>
            <EmailForm />
          </section>

          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
            <h2 className="mb-5 text-2xl font-semibold">
              Required Field
            </h2>
            <p className="mb-5 text-slate-300">
              The server rejects passwords shorter than six characters.
            </p>
            <PasswordForm />
          </section>

          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
            <h2 className="mb-5 text-2xl font-semibold">
              Full Name Greeting
            </h2>
            <p className="mb-5 text-slate-300">
              Enter your first and last name to get a personalized greeting.
            </p>
            <NameForm />
          </section>
        </div>
      </div>
    </main>
  );
}
