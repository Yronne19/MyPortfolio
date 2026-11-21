// TODO: replace these with your real links before deploying.
const CONTACT = {
  email: 'yronnedebalocos6@gmail.com',
  github: 'https://github.com/Yronne19',
  linkedin: 'https://google.com',
}

function Icon({ name }) {
  if (name === 'mail') {
    return (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }

  if (name === 'github') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.15 9.06 7.52 10.53.55.1.75-.24.75-.53v-2.05c-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-1-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.7-1.48-2.45-.28-5.02-1.23-5.02-5.47 0-1.2.43-2.2 1.13-2.97-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.4 10.4 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.77 1.13 2.97 0 4.26-2.58 5.19-5.04 5.46.4.35.75 1.03.75 2.08v3.08c0 .3.2.64.76.53A11.1 11.1 0 0 0 23.1 11.6C23.1 5.33 18.27.5 12 .5Z" />
      </svg>
    )
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 21.5h4.16V9.75H2.9V21.5Zm7.1 0h4.16v-6.6c0-1.75.33-3.44 2.5-3.44 2.13 0 2.16 2 2.16 3.55v6.49h4.16v-7.3c0-3.6-.78-6.38-5-6.38-2.02 0-3.38 1.11-3.94 2.16h-.06V9.75H10V21.5Z" />
    </svg>
  )
}

export default function Contact() {
  const links = [
    { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: 'mail' },
    { label: 'GitHub', value: 'View my repositories', href: CONTACT.github, icon: 'github' },
    { label: 'LinkedIn', value: 'Connect with me', href: CONTACT.linkedin, icon: 'linkedin' },
  ]

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-stone-200/80 py-20 sm:py-24 dark:border-zinc-800/70"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/10" />

          <div className="relative">
            <p className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase dark:text-amber-500">
              03 — Contact
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-zinc-50">
              Let&apos;s build something that works
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600 dark:text-zinc-400">
              I&apos;m open to internships, junior backend roles, and student projects. If you need
              someone who enjoys the server side, I&apos;d be glad to hear from you.
            </p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.icon === 'mail' ? undefined : '_blank'}
                    rel={link.icon === 'mail' ? undefined : 'noreferrer'}
                    className="flex h-full flex-col gap-3 rounded-xl border border-stone-200 bg-stone-50/60 p-4 transition hover:-translate-y-0.5 hover:border-amber-400/70 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-amber-500/40 dark:hover:bg-zinc-950"
                  >
                    <span className="text-amber-600 dark:text-amber-500">
                      <Icon name={link.icon} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-zinc-500">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium break-all text-stone-800 dark:text-zinc-200">
                        {link.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
