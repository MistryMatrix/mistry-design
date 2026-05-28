import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import CardPreview from "@/components/CardPreview";
import { projects } from "@/components/projects";
import { CALENDLY_URL } from "@/components/links";

export default function Home() {
  return (
    <div className="relative" id="top">
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------- Hero */}
        <section className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="pt-14 pb-16 sm:py-20 lg:py-28">
            <h1 className="hero-headline">
              Building websites for{" "}
              <span className="desktop-break">
                <br />
              </span>
              <em className="nobr">small businesses</em>
              {" "}that{" "}
              <span className="desktop-break">
                <br />
              </span>
              want to look like{" "}
              <span className="desktop-break">
                <br />
              </span>
              they mean it.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
              Custom sites for restaurants, shops, and service businesses in the
              Princeton area. No templates. No drag-and-drop.
            </p>

            <div className="mt-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                Book a call
                <span className="arrow" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- Work */}
        <section
          id="work"
          className="mx-auto max-w-7xl px-6 pt-4 sm:px-8 sm:pt-8"
        >
          <p className="mb-10 font-mono text-[13px] uppercase tracking-[0.18em] text-ink/55">
            Selected Work · {projects.length} Projects
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden border border-ink/10 bg-paper/70 backdrop-blur-md transition-all duration-300 hover:bg-paper hover:shadow-2xl hover:shadow-ink/10"
              >
                <CardPreview url={project.url} displayUrl={project.displayUrl} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="mb-2 font-display text-xl font-normal">
                        {project.name}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink/55">
                        {project.tag}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-ink/50 transition group-hover:text-ink">
                      View
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- About */}
        <section id="about" className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="pt-20 sm:pt-24">
            <div className="frosted-card grid grid-cols-1 items-center gap-8 p-8 sm:p-12 md:grid-cols-12 lg:gap-12">
              <div className="md:col-span-3">
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-ink/55">
                  About
                </p>
                <div className="relative mt-5 h-[320px] w-[280px] max-w-full overflow-hidden border border-ink/15 bg-paper">
                  <Image
                    src="/ethan-photo.png"
                    alt="Ethan Fang, founder of MistryDesign"
                    fill
                    sizes="280px"
                    className="object-cover grayscale"
                  />
                </div>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-[2.5rem] font-light leading-[1.1]">
                  Built from scratch.
                  <br />
                  Every time.
                </h2>
                <div className="mt-8 space-y-5">
                  <p className="text-[15px] font-light leading-[1.75] text-ink/60">
                    I build websites for small businesses in Princeton and the
                    surrounding area. No templates, no page builders, no filler.
                  </p>
                  <p className="text-[15px] font-light leading-[1.75] text-ink/60">
                    The work starts with the build, not a theme. I design around
                    how a business actually runs and how its customers actually
                    search, so the result fits the place it represents instead of
                    looking like everywhere else.
                  </p>
                  <p className="text-[15px] font-light leading-[1.75] text-ink/60">
                    I take on restaurants, shops, and local service businesses. The
                    kind of places that are part of a neighborhood. If you are
                    ready to take your online presence seriously, let us talk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- Contact */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 pt-20 sm:px-8 sm:pt-24"
        >
          <div className="frosted-card p-8 sm:p-12 md:p-16">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#3f8f52]/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#2f7a45] ring-1 ring-[#3f8f52]/30">
                <span className="h-1.5 w-1.5 animate-pulse bg-[#3f8f52]" />
                Available for new projects
              </div>
              <h2 className="font-display text-2xl font-normal sm:text-3xl">
                Book a free 20-minute call. No pitch, no pressure.
              </h2>
              <p className="text-sm leading-relaxed text-ink/60">
                Just a conversation about what you&rsquo;re trying to build. Pick
                a time that works and we&rsquo;ll talk it through.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn"
                >
                  Schedule a call
                  <span className="arrow" aria-hidden>
                    →
                  </span>
                </a>
                <a
                  href="mailto:hello@mistrydesign.com"
                  className="text-[15px] text-ink/60 transition hover:text-ink"
                >
                  hello@mistrydesign.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------- Footer */}
      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 pt-20 sm:px-8 sm:pt-24">
        <div className="frosted-card p-8 sm:p-12 md:p-16">
          <div className="border-b border-ink/10 pb-10">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-ink/80"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <h3 className="font-display text-lg font-normal tracking-tight">
                MistryDesign
              </h3>
            </div>
            <p className="mt-3 max-w-md text-sm text-ink/60">
              Custom websites for small businesses in Princeton, NJ and the
              surrounding area.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-10 sm:grid-cols-3">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/80">
                Services
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#contact" className="text-ink/60 transition hover:text-ink">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-ink/60 transition hover:text-ink">
                    Local SEO Setup
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-ink/60 transition hover:text-ink">
                    Brand Identity
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/80">
                About
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#work" className="text-ink/60 transition hover:text-ink">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-ink/60 transition hover:text-ink">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-ink/60 transition hover:text-ink">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/80">
                Connect
              </h4>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="mailto:hello@mistrydesign.com"
                  aria-label="Email"
                  className="inline-flex h-9 w-9 items-center justify-center bg-ink/5 text-ink/60 ring-1 ring-ink/10 transition hover:bg-ink/10 hover:text-ink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center bg-ink/5 text-ink/60 ring-1 ring-ink/10 transition hover:bg-ink/10 hover:text-ink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-ink/60">© 2025 MistryDesign</p>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-sm text-ink/60 transition hover:text-ink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
