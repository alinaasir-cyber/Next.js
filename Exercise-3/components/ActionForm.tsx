"use client";

import { useActionState } from "react";
import {
  submitEmail,
  submitName,
  submitPassword,
  type FormState,
} from "@/app/actions";

const initialState: FormState = { message: "", success: false };

function FormMessage({ state }: { state: FormState }) {
  if (!state.message) return null;

  return (
    <p
      role={state.success ? "status" : "alert"}
      className={
        state.success
          ? "mt-4 text-sm text-emerald-300"
          : "mt-4 text-sm text-rose-300"
      }
    >
      {state.message}
    </p>
  );
}

const inputClassName =
  "mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20";

const buttonClassName =
  "mt-5 rounded-lg bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-wait disabled:opacity-60";

export function EmailForm() {
  const [state, formAction, isPending] = useActionState(
    submitEmail,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-1">
      <label htmlFor="email" className="text-sm font-medium text-slate-200">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="you@example.com"
        className={inputClassName}
      />
      <button disabled={isPending} className={buttonClassName}>
        {isPending ? "Submitting..." : "Submit email"}
      </button>
      <FormMessage state={state} />
    </form>
  );
}

export function PasswordForm() {
  const [state, formAction, isPending] = useActionState(
    submitPassword,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-1">
      <label htmlFor="password" className="text-sm font-medium text-slate-200">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
        minLength={6}
        placeholder="At least 6 characters"
        className={inputClassName}
      />
      <button disabled={isPending} className={buttonClassName}>
        {isPending ? "Checking..." : "Check password"}
      </button>
      <FormMessage state={state} />
    </form>
  );
}

export function NameForm() {
  const [state, formAction, isPending] = useActionState(
    submitName,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-slate-200"
        >
          First name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          placeholder="First name"
          className={inputClassName}
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="text-sm font-medium text-slate-200"
        >
          Last name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          placeholder="Last name"
          className={inputClassName}
        />
      </div>
      <button disabled={isPending} className={buttonClassName}>
        {isPending ? "Submitting..." : "Show greeting"}
      </button>
      <FormMessage state={state} />
    </form>
  );
}
