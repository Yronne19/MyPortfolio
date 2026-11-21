export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background: grid + warm glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-32 -right-24 -z-10 h-96 w-96 rounded-full bg-amber-400/25 blur-3xl dark:bg-amber-500/15" />
      <div className="pointer-events-none absolute top-40 -left-32 -z-10 h-80 w-80 rounded-full bg-orange-300/25 blur-3xl dark:bg-orange-600/10" />

      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 pt-14 pb-20 sm:px-8 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-medium text-amber-700 dark:text-amber-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
            </span>
            BSIT student · Backend development
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Yronne J.
            <br />
            Debalocos
            {/*<span className="text-amber-500">.</span>*/}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-zinc-400">
            I build the parts of the web you don&apos;t see the APIs, data models, and services
            that keep everything else running.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-500 dark:text-zinc-500">
            Second year Information Technology student pursuing backend development. I wrote my
            first line of code in junior high school, and C++ was my first language.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-800 dark:bg-amber-500 dark:text-zinc-950 dark:hover:bg-amber-400"
            >
              See my stack
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-400 hover:text-amber-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-amber-500/50 dark:hover:text-amber-400"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-stone-200 pt-6 dark:border-zinc-800/80">
            {[
              { label: 'Studying', value: 'BSIT · 2nd Year' },
              { label: 'Focus', value: 'Backend & APIs' },
              { label: 'First language', value: 'C++' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-zinc-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-stone-800 dark:text-zinc-200">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in group relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-amber-500/30 via-orange-400/10 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-80 sm:group-hover:from-amber-500/45" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-100 shadow-2xl shadow-stone-900/10 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-amber-400/80 group-hover:shadow-amber-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40 dark:group-hover:border-amber-500/50 dark:group-hover:shadow-amber-500/10">
            <img
              src="/yronne.webp"
              alt="Portrait of Yronne J. Debalocos"
              width="896"
              height="1188"
              className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* light sweep across the photo on hover */}
            <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[350%]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent transition-opacity duration-500 group-hover:from-zinc-950/90" />
            <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-3 transition-transform duration-500 ease-out group-hover:-translate-y-1">
              <div>
                <p className="font-mono text-[11px] tracking-widest text-amber-400 uppercase">
                  Backend developer
                </p>
                <p className="mt-1 text-sm font-semibold text-white">Yronne J. Debalocos</p>
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[11px] font-medium text-white backdrop-blur">
                BSIT  {/* &apos;2 */}
              </span>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 hidden rounded-xl border border-stone-200 bg-white/90 px-3 py-2 font-mono text-xs font-medium text-stone-700 shadow-lg backdrop-blur sm:block dark:border-zinc-700/70 dark:bg-zinc-900/90 dark:text-zinc-300">
            <span className="text-amber-500">$</span> spring-boot run
          </div>
          <div className="absolute -right-3 bottom-16 hidden rounded-xl border border-stone-200 bg-white/90 px-3 py-2 font-mono text-xs font-medium text-stone-700 shadow-lg backdrop-blur sm:block dark:border-zinc-700/70 dark:bg-zinc-900/90 dark:text-zinc-300">
            <span className="text-emerald-500">200</span> OK
          </div>
        </div>
      </div>
    </section>
  )
}
