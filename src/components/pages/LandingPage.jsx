
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import  Navbar  from "@/components/ui/navbar";

function Landing() {
  return (
    <div
      className="min-h-screen overflow-hidden bg-[#FFF3E3] text-[#4B2E2B]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Navbar */}
      
      <nav className="border-b border-[#C08552]/25">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#4B2E2B] text-sm font-bold text-[#FFF3E3]">
              PW
            </div>

            <div>
              <p className="text-xl font-bold tracking-tight">
                PulseWorks <span className="text-[#C08552]">AI</span>
              </p>
              <p className="text-[10px] tracking-[0.25em] text-[#6F4536]">
                WORKSPACE
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-[#4B2E2B] transition hover:text-[#C08552]"
            >
              What we do
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[#4B2E2B] transition hover:text-[#C08552]"
            >
              Our approach
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              asChild
              variant="ghost"
              className="text-[#4B2E2B] hover:bg-[#C08552]/10"
            >
              <Link to="/login">Sign In</Link>
            </Button>

            <Button
              asChild
              className="bg-[#4B2E2B] text-[#FFF3E3] hover:bg-[#8C5A3C]"
            >
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
          {/* Small editorial label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C08552]" />

            <p className="text-xs font-semibold tracking-[0.2em] text-[#6F4536]">
              A WORKSPACE FOR THE WAY YOU WORK
            </p>
          </div>

          {/* Centered headline */}
          <div className="mt-8 text-center">
            <h1
              className="mx-auto max-w-5xl text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-8xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Work feels better
              <br />
              <span className="italic text-[#8C5A3C]">
                when it flows.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#6F4536] md:text-lg">
              Bring your projects, tasks and people into one
              thoughtful workspace. Keep the details organised
              and the bigger picture in view.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#4B2E2B] px-7 text-[#FFF3E3] hover:bg-[#8C5A3C]"
              >
                <Link to="/register">Create your workspace ↗</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#8C5A3C]/40 bg-transparent px-7 text-[#4B2E2B] hover:bg-[#C08552]/10"
              >
                <a href="#features">Discover PulseWorks</a>
              </Button>
            </div>
          </div>

          {/* Workspace Preview */}
          <div className="relative mx-auto mt-16 max-w-5xl md:mt-20">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 rounded-[2rem] bg-[#C08552]/15 md:-inset-8" />

            <div className="relative overflow-hidden rounded-2xl border border-[#C08552]/30 bg-white shadow-xl shadow-[#4B2E2B]/10">
              {/* Preview top bar */}
              <div className="flex items-center justify-between border-b border-[#C08552]/20 px-5 py-4 md:px-8">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#C08552]" />
                  <span className="text-sm font-semibold">
                    PulseWorks / Workspace
                  </span>
                </div>

                <span className="hidden text-xs text-[#6F4536] sm:block">
                  TEAM OVERVIEW
                </span>
              </div>

              <div className="grid md:grid-cols-[1fr_1.4fr]">
                {/* Preview sidebar */}
                <div className="border-b border-[#C08552]/20 bg-[#F7E5D0] p-5 md:border-b-0 md:border-r md:p-8">
                  <p className="text-xs font-bold tracking-[0.15em] text-[#8C5A3C]">
                    YOUR SPACE
                  </p>

                  <h2
                    className="mt-3 text-3xl leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Make room
                    <br />
                    for progress.
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-[#6F4536]">
                    A clear view of what matters, what is moving
                    and what comes next.
                  </p>

                  <div className="mt-8 border-t border-[#C08552]/30 pt-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6F4536]">Tasks completed</span>
                      <span className="font-bold">16 / 24</span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-[#C08552]/20">
                      <div className="h-full w-2/3 rounded-full bg-[#8C5A3C]" />
                    </div>
                  </div>
                </div>

                {/* Preview task area */}
                <div className="p-5 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-[#8C5A3C]">
                        THIS WEEK
                      </p>
                      <h3 className="mt-1 text-xl font-bold">
                        Your tasks
                      </h3>
                    </div>

                    <span className="rounded-full bg-[#F7E5D0] px-3 py-1 text-xs font-semibold text-[#6F4536]">
                      03 active
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 rounded-xl border border-[#C08552]/25 p-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F7E5D0] text-[#8C5A3C]">
                        01
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          Website redesign
                        </p>
                        <p className="mt-1 text-xs text-[#6F4536]">
                          Design · In progress
                        </p>
                      </div>

                      <span className="rounded-full bg-[#F7E5D0] px-2.5 py-1 text-xs font-semibold text-[#6F4536]">
                        High
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-[#C08552]/25 p-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#F7E5D0] text-[#8C5A3C]">
                        02
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          Sprint planning
                        </p>
                        <p className="mt-1 text-xs text-[#6F4536]">
                          Team · Pending
                        </p>
                      </div>

                      <span className="rounded-full bg-[#FFF3E3] px-2.5 py-1 text-xs font-semibold text-[#6F4536]">
                        Medium
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-[#C08552]/25 p-4">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#4B2E2B] text-xs text-[#FFF3E3]">
                        ✓
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          Project documentation
                        </p>
                        <p className="mt-1 text-xs text-[#6F4536]">
                          Documents · Completed
                        </p>
                      </div>

                      <span className="rounded-full bg-[#F7E5D0] px-2.5 py-1 text-xs font-semibold text-[#6F4536]">
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative caption */}
            <div className="mt-5 flex flex-col justify-between gap-2 text-xs font-medium tracking-[0.12em] text-[#6F4536] sm:flex-row">
              <span>PLAN WITH CLARITY</span>
              <span>MOVE WITH PURPOSE</span>
              <span>FINISH TOGETHER</span>
            </div>
          </div>
        </section>

        {/* Features - Editorial layout */}
        <section
          id="features"
          className="border-y border-[#C08552]/25 bg-[#F7E5D0]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#8C5A3C]">
                  THE PULSEWORKS METHOD
                </p>

                <h2
                  className="mt-5 text-4xl leading-tight md:text-6xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Good work
                  <br />
                  needs a
                  <br />
                  <span className="italic text-[#8C5A3C]">
                    good rhythm.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm leading-7 text-[#6F4536]">
                  Every part of your work has a place. Keep
                  responsibilities clear, progress visible and
                  collaboration simple.
                </p>
              </div>

              {/* Feature rows */}
              <div className="border-t border-[#C08552]/35">
                <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#C08552]/35 py-6 sm:grid-cols-[64px_1fr] sm:gap-6">
                  <span className="text-sm font-semibold text-[#8C5A3C]">
                    01
                  </span>

                  <div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Tasks with direction
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#6F4536]">
                      Assign responsibilities, set priorities and
                      keep deadlines in sight.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#C08552]/35 py-6 sm:grid-cols-[64px_1fr] sm:gap-6">
                  <span className="text-sm font-semibold text-[#8C5A3C]">
                    02
                  </span>

                  <div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Projects that connect
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#6F4536]">
                      Bring related tasks, resources and team
                      updates into one shared space.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#C08552]/35 py-6 sm:grid-cols-[64px_1fr] sm:gap-6">
                  <span className="text-sm font-semibold text-[#8C5A3C]">
                    03
                  </span>

                  <div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Teams in sync
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#6F4536]">
                      Stay aligned through shared updates,
                      conversations and activity.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#C08552]/35 py-6 sm:grid-cols-[64px_1fr] sm:gap-6">
                  <span className="text-sm font-semibold text-[#8C5A3C]">
                    04
                  </span>

                  <div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      AI that assists
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#6F4536]">
                      Get help with task summaries and document
                      understanding when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / CTA */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#4B2E2B] p-8 text-[#FFF3E3] md:p-16">
            <div className="absolute -right-16 -top-20 size-64 rounded-full border border-[#C08552]/30 md:size-80" />
            <div className="absolute -right-5 -top-10 size-48 rounded-full border border-[#C08552]/20 md:size-64" />

            <div className="relative grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#D9A36E]">
                  YOUR NEXT CHAPTER
                </p>

                <h2
                  className="mt-5 text-4xl leading-tight md:text-6xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Make space
                  <br />
                  for better work.
                </h2>
              </div>

              <div>
                <p className="leading-7 text-[#FFF3E3]/85">
                  Projects, tasks and people — brought together
                  in a workspace designed to keep your team
                  moving forward.
                </p>

                <Button
                  asChild
                  className="mt-6 bg-[#C08552] text-[#4B2E2B] hover:bg-[#FFF3E3]"
                >
                  <Link to="/register">Start with PulseWorks ↗</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#C08552]/25">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="text-lg font-bold">
            PulseWorks <span className="text-[#C08552]">AI</span>
          </p>

          <p className="text-sm text-[#6F4536]">
            A secure space for meaningful work.
          </p>

          <p className="text-xs text-[#6F4536]">
            © 2026 PulseWorks AI
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
