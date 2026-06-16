import { SITE_TAGLINE } from "@/lib/site-metadata";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-950/20">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-green-900 sm:text-5xl dark:text-green-100">
            Technology in service of{" "}
            <span className="text-green-600 dark:text-green-400">ecological conservation</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            MoonLeaf AB brings its conservation-focused projects together under one roof. The full
            home page &mdash; hero, project showcase, and contact form &mdash; arrives in upcoming
            work.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-300">
          Projects
        </h2>
        <p className="mt-2 text-foreground/60">Project showcase coming soon.</p>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-300">
          Contact
        </h2>
        <p className="mt-2 max-w-xl text-foreground/60">
          {SITE_TAGLINE} A contact form lands in this section in a later ticket.
        </p>
      </section>
    </>
  );
}
