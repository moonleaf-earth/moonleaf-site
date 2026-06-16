import Link from "next/link";

function MoonLeafMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-green-700 dark:text-green-300"
      aria-hidden="true"
    >
      {/* crescent moon */}
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
        fill="currentColor"
        opacity="0.3"
      />
      {/* leaf */}
      <path
        d="M12 4c3 2.6 4.5 5.4 4.5 8.2 0 3-2 5.4-4.5 6.3-2.5-.9-4.5-3.3-4.5-6.3C7.5 9.4 9 6.6 12 4z"
        fill="currentColor"
      />
      {/* leaf vein */}
      <path
        d="M12 7.5v8.4"
        stroke="var(--background)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-[#fafaf8]/85 backdrop-blur dark:border-green-900/40 dark:bg-[#0c1210]/85">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-green-800 transition-colors hover:text-green-600 dark:text-green-200 dark:hover:text-green-300"
        >
          <MoonLeafMark />
          <span className="text-lg font-semibold tracking-tight">MoonLeaf AB</span>
        </Link>
        <a
          href="#contact"
          className="rounded-md bg-green-700 px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-green-800"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
