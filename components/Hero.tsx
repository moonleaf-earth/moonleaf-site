export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-[#0c1210]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-green-900 sm:text-5xl dark:text-green-100">
          <span className="text-green-600 dark:text-green-400">Technology</span> in service of
          ecological conservation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
          MoonLeaf AB builds practical tools that help people understand, protect, and restore
          living systems.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-flex rounded-md bg-green-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          Explore projects
        </a>
      </div>
    </section>
  );
}
