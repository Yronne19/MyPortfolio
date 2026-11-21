export default function Footer() {
  return (
    <footer className="border-t border-stone-200/80 py-8 dark:border-zinc-800/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-xs text-stone-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Yronne J. Debalocos. All rights reserved.
        </p>
        {/* <p className="font-mono text-xs text-stone-400 dark:text-zinc-600">
          Built with React &amp; Tailwind CSS
        </p> */}
      </div>
    </footer>
  )
}
