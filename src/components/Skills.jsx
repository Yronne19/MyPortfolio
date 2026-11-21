const LANGUAGES = [
  { name: 'Java', type: 'Language', icon: '/icons/java.png' },
  { name: 'C++', type: 'Language', mark: 'C++' },
  { name: 'Python', type: 'Language', icon: '/icons/python.png' },
  { name: 'JavaScript', type: 'Language', icon: '/icons/javascript.png' },
]

const BACKEND = [
  { name: 'Spring Boot', type: 'Framework', icon: '/icons/spring.png' },
  { name: 'FastAPI', type: 'Framework', icon: '/icons/fastapi.png' },
  { name: 'MySQL', type: 'Database', icon: '/icons/mysql.png' },
]

const TOOLS = [
  { name: 'Git', type: 'Tool', icon: '/icons/git.png' },
  { name: 'GitHub', type: 'Tool', icon: '/icons/github.png' },
]

function SkillTile({ name, type, icon, mark }) {
  return (
    <div className="flex h-20 w-52 shrink-0 items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 transition duration-300 hover:border-amber-400/70 hover:shadow-lg hover:shadow-amber-500/5 sm:w-56 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-amber-500/40">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white p-1.5 dark:border-zinc-700">
        {icon ? (
          <img
            src={icon}
            alt=""
            width="32"
            height="32"
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="font-mono text-xs font-bold text-stone-700 dark:text-zinc-800">
            {mark}
          </span>
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-stone-900 dark:text-zinc-100">
          {name}
        </span>
        <span className="mt-0.5 block font-mono text-[10px] tracking-widest text-stone-400 uppercase dark:text-zinc-500">
          {type}
        </span>
      </span>
    </div>
  )
}

// Repeats the list into one group, then renders that group twice so the
// -50% translate loops seamlessly even when there are only a few items.
function MarqueeRow({ items, duration }) {
  const repeats = Math.max(1, Math.ceil(8 / items.length))
  const group = Array.from({ length: repeats }, () => items).flat()
  const track = [...group, ...group]

  return (
    <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
      <div
        className="flex w-max animate-marquee gap-4 group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((skill, index) => (
          <div key={`${skill.name}-${index}`} aria-hidden={index >= group.length}>
            <SkillTile {...skill} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-stone-200/80 bg-stone-100/60 py-20 sm:py-24 dark:border-zinc-800/70 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase dark:text-amber-500">
            02 — Tech stack
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-zinc-50">
            The tools I build with
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-zinc-400">
            Four languages, three backend tools, one direction. I keep my stack focused so I can go
            deeper instead of wider.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-mono text-xs tracking-widest text-stone-500 uppercase dark:text-zinc-500">
              Languages
            </h3>
            <span className="font-mono text-[10px] tracking-widest text-stone-400 uppercase dark:text-zinc-600">
              hover to pause
            </span>
          </div>
          <div className="mt-4">
            <MarqueeRow items={LANGUAGES} duration={26} />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-mono text-xs tracking-widest text-stone-500 uppercase dark:text-zinc-500">
            Frameworks &amp; data
          </h3>
          <div className="mt-4">
            <MarqueeRow items={BACKEND} duration={20} />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-mono text-xs tracking-widest text-stone-500 uppercase dark:text-zinc-500">
            Tools
          </h3>
          <div className="mt-4">
            <MarqueeRow items={TOOLS} duration={16} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-amber-500/20 dark:bg-amber-500/5">
          <p className="text-sm leading-relaxed text-stone-700 dark:text-zinc-300">
            <span className="font-semibold text-stone-900 dark:text-zinc-100">
              What I&apos;m focused on next:
            </span>{' '}
            authentication flows, database design, and writing tests for the APIs I build.
          </p>
          <a
            href="#contact"
            className="shrink-0 font-mono text-xs font-semibold tracking-wide text-amber-700 underline-offset-4 hover:underline dark:text-amber-400"
          >
            work with me →
          </a>
        </div>
      </div>
    </section>
  )
}
