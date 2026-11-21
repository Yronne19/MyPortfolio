const TIMELINE = [
  {
    period: 'Junior high school',
    title: 'The first line of code',
    body: 'I started programming in junior high school. C++ was my first language, and it taught me to think about how a program actually works types, memory, and logic before worrying about the interface.',
  },
  {
    period: 'Senior high school',
    title: 'From one language to several',
    body: 'I moved on to Java, Python, and JavaScript. Each one pushed me toward a different way of solving problems, and most of what I enjoyed was on the server side.',
  },
  {
    period: 'Now',
    title: 'Second-year BSIT, backend focus',
    body: 'I am currently a second year BSIT student at the University of Mindanao Tagum College, building REST APIs with Spring Boot and FastAPI and modeling the MySQL databases behind them. My goal is to become a backend developer who can design a system, not just ship an endpoint.',
  },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-stone-200/80 py-20 sm:py-24 dark:border-zinc-800/70">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase dark:text-amber-500">
              01 — About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-zinc-50">
              Backend first, curious about everything else
            </h2>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
              <svg
                className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 9 12 4 2 9l10 5 10-5Z" />
                <path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
              </svg>
              <span>
                <span className="font-medium">BSIT</span>
                <span className="mx-1.5 text-stone-300 dark:text-zinc-700">|</span>
                University of Mindanao Tagum College
              </span>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600 dark:text-zinc-400">
              <p>
                I&apos;m Yronne J. Debalocos, a second year BSIT student at the University of
                Mindanao Tagum College, working toward a career in backend development. I like the
                parts of software that are judged by behavior rather than looks: how data is
                structured, how a request travels through a service, and how a system keeps holding
                up as it grows.
              </p>
              <p>
                My journey started in junior high school with C++. That foundation in the
                fundamentals still shapes how I write code today, even though most of my work now
                happens in Java. I&apos;m currently building my skills through academic
                projects and self-study, one API at a time.
              </p>
              <p>
                I&apos;m looking for internships and early-career opportunities where I can learn from
                experienced engineers, contribute to real systems, and get better at the craft.
              </p>
            </div>

            <ol className="mt-10 space-y-6 border-l border-stone-200 pl-6 dark:border-zinc-800">
              {TIMELINE.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute top-1.5 -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-stone-50 bg-amber-500 dark:border-zinc-950" />
                  <p className="font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-zinc-500">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-stone-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:pt-14">
            <div className="overflow-hidden rounded-2xl border border-stone-800 bg-zinc-900 shadow-xl shadow-stone-900/10 dark:border-zinc-800 dark:shadow-black/30">
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-xs text-zinc-500">profile.js</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-zinc-300 sm:text-[13px]">
                <code>
                  <span className="text-zinc-500">// still learning, always shipping</span>
                  {'\n'}
                  <span className="text-amber-400">const</span>{' '}
                  <span className="text-sky-300">yronne</span>{' '}
                  <span className="text-zinc-400">=</span> {'{'}
                  {'\n  '}
                  <span className="text-emerald-300">name</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-orange-300">&apos;Yronne J. Debalocos&apos;</span>,
                  {'\n  '}
                  <span className="text-emerald-300">role</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-orange-300">&apos;BSIT Student&apos;</span>,
                  {'\n  '}
                  <span className="text-emerald-300">focus</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-orange-300">&apos;Backend Development&apos;</span>,
                  {'\n  '}
                  <span className="text-emerald-300">firstLanguage</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-orange-300">&apos;C++&apos;</span>,
                  {'\n  '}
                  <span className="text-emerald-300">languages</span>
                  <span className="text-zinc-400">:</span> [
                  <span className="text-orange-300">&apos;Java&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;C++&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;Python&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;JavaScript&apos;</span>],
                  {'\n  '}
                  <span className="text-emerald-300">stack</span>
                  <span className="text-zinc-400">:</span> [
                  <span className="text-orange-300">&apos;Spring Boot&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;FastAPI&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;MySQL&apos;</span>],
                  {'\n  '}
                  <span className="text-emerald-300">tools</span>
                  <span className="text-zinc-400">:</span> [
                  <span className="text-orange-300">&apos;Git&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;Github&apos;</span>],
                  {'\n  '}
                  <span className="text-emerald-300">openTo</span>
                  <span className="text-zinc-400">:</span>{' '}
                  <span className="text-orange-300">&apos;Internships&apos;</span>,
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                <p className="text-2xl font-bold text-stone-900 dark:text-zinc-50">4</p>
                <p className="mt-1 text-xs text-stone-500 dark:text-zinc-500">
                  Languages I work in
                </p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                <p className="text-2xl font-bold text-stone-900 dark:text-zinc-50">3</p>
                <p className="mt-1 text-xs text-stone-500 dark:text-zinc-500">
                  Core backend tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
