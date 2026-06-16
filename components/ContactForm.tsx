"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  sendContactMessage,
  type ContactActionResult,
} from "@/app/actions/contact";

const initialState: ContactActionResult | null = null;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.ok) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} noValidate className="mt-8 max-w-2xl space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-green-900 dark:text-green-100"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-2 block w-full rounded-md border border-green-100 bg-white px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-foreground/40 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 dark:border-green-900/60 dark:bg-green-950/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-green-900 dark:text-green-100"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-2 block w-full rounded-md border border-green-100 bg-white px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-foreground/40 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 dark:border-green-900/60 dark:bg-green-950/20"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-green-900 dark:text-green-100"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="mt-2 block w-full rounded-md border border-green-100 bg-white px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-foreground/40 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 dark:border-green-900/60 dark:bg-green-950/20"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-fit rounded-md bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>

        <p aria-live="polite" className="min-h-6 text-sm text-foreground/70">
          {pending ? "Sending message..." : null}
          {!pending && state?.ok ? "Thanks, your message was sent." : null}
          {!pending && state && !state.ok ? (
            <span className="text-red-700 dark:text-red-300">{state.error}</span>
          ) : null}
        </p>
      </div>
    </form>
  );
}
