import { PUBLISHER_NAME, SITE_TAGLINE } from "@/lib/site-metadata";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-green-100 bg-green-50/40 dark:border-green-900/40 dark:bg-green-950/10">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-base font-semibold text-green-800 dark:text-green-200">
          {PUBLISHER_NAME}
        </p>
        <p className="mt-1 max-w-md text-sm text-foreground/70">{SITE_TAGLINE}</p>
        <p className="mt-4 text-sm text-foreground/60">
          Org. nr <span className="tabular-nums">000000&ndash;0000</span> (placeholder)
        </p>
        <p className="mt-1 text-sm text-foreground/60">
          &copy; {year} {PUBLISHER_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
