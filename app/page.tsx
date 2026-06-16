import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { SITE_TAGLINE } from "@/lib/site-metadata";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />

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
