import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />

      <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-300">
          Contact us
        </h2>
        <p className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-green-900 sm:text-3xl dark:text-green-100">
          Tell us what ecological technology can help you build, study, or protect.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
