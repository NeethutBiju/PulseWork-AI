
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function Landing() {
  return (
    <div className="min-h-screen bg-[#FFF3E3] text-[#4B2E2B]">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-[#C08552]/20 bg-[#FFF3E3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">

          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight">
              PulseWorks
              <span className="text-[#C08552]"> AI</span>
            </span>

            <span className="text-[10px] tracking-[0.2em] text-[#8C5A3C]">
              WORKSPACE
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-[#8C5A3C] transition hover:text-[#C08552]"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[#8C5A3C] transition hover:text-[#C08552]"
            >
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="text-[#4B2E2B] hover:bg-[#C08552]/10"
            >
              <Link to="/login">Sign In</Link>
            </Button>

            <Button
              asChild
              className="bg-[#8C5A3C] text-[#FFF3E3] hover:bg-[#4B2E2B]"
            >
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C08552]/30 bg-white px-4 py-2">
            <span className="size-2 rounded-full bg-[#C08552]" />
            <span className="text-xs font-semibold tracking-wide text-[#8C5A3C]">
              YOUR WORKSPACE, REIMAGINED
            </span>
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Bring your work
            <br />
            <span className="text-[#C08552]">into focus.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#8C5A3C] md:text-lg">
            Plan projects, manage tasks, and collaborate with your team
            from one organised workspace. Less scattered work.
            More meaningful progress.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#8C5A3C] px-7 text-[#FFF3E3] hover:bg-[#4B2E2B]"
            >
              <Link to="/register">
                Start your workspace →
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#C08552]/50 bg-transparent px-7 text-[#4B2E2B] hover:bg-[#C08552]/10"
            >
              <a href="#features">Explore Features</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="flex size-9 items-center justify-center rounded-full border-2 border-[#FFF3E3] bg-[#C08552] text-xs font-bold text-white">
                P
              </div>

              <div className="flex size-9 items-center justify-center rounded-full border-2 border-[#FFF3E3] bg-[#8C5A3C] text-xs font-bold text-white">
                W
              </div>

              <div className="flex size-9 items-center justify-center rounded-full border-2 border-[#FFF3E3] bg-[#4B2E2B] text-xs font-bold text-white">
                A
              </div>
            </div>

            <p className="text-sm text-[#8C5A3C]">
              Built for teams that move together
            </p>
          </div>
        </div>

        {/* Workspace Preview */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-[#C08552]/10 blur-2xl" />

          <div className="relative rounded-2xl border border-[#C08552]/30 bg-white p-5 shadow-xl shadow-[#4B2E2B]/10 md:p-7">

            {/* Preview Header */}
            <div className="flex items-center justify-between border-b border-[#C08552]/20 pb-5">
              <div>
                <p className="text-xs font-medium text-[#C08552]">
                  WORKSPACE
                </p>

                <h3 className="mt-1 text-lg font-bold">
                  Team Overview
                </h3>
              </div>

              <div className="flex size-10 items-center justify-center rounded-xl bg-[#FFF3E3] text-sm font-bold text-[#8C5A3C]">
                PW
              </div>
            </div>

            {/* Preview Stats */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#FFF3E3] p-3">
                <p className="text-xs text-[#8C5A3C]">Projects</p>
                <p className="mt-2 text-2xl font-extrabold">08</p>
              </div>

              <div className="rounded-xl bg-[#FFF3E3] p-3">
                <p className="text-xs text-[#8C5A3C]">Tasks</p>
                <p className="mt-2 text-2xl font-extrabold">24</p>
              </div>

              <div className="rounded-xl bg-[#FFF3E3] p-3">
                <p className="text-xs text-[#8C5A3C]">Completed</p>
                <p className="mt-2 text-2xl font-extrabold">16</p>
              </div>
            </div>

            {/* Preview Tasks */}
            <div className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-bold">Recent Tasks</h4>
                <span className="text-xs font-medium text-[#C08552]">
                  View all
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-[#C08552]/20 p-3">
                  <div className="size-4 rounded border border-[#C08552]" />

                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      Website redesign
                    </p>
                    <p className="mt-1 text-xs text-[#8C5A3C]">
                      Design · In progress
                    </p>
                  </div>

                  <span className="rounded-full bg-[#C08552]/15 px-2 py-1 text-xs font-medium text-[#8C5A3C]">
                    High
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[#C08552]/20 p-3">
                  <div className="size-4 rounded border border-[#C08552]" />

                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      Sprint planning
                    </p>
                    <p className="mt-1 text-xs text-[#8C5A3C]">
                      Team · To do
                    </p>
                  </div>

                  <span className="rounded-full bg-[#FFF3E3] px-2 py-1 text-xs font-medium text-[#8C5A3C]">
                    Medium
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[#C08552]/20 p-3">
                  <div className="flex size-4 items-center justify-center rounded bg-[#8C5A3C] text-[10px] text-white">
                    ✓
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      Project documentation
                    </p>
                    <p className="mt-1 text-xs text-[#8C5A3C]">
                      Documents · Completed
                    </p>
                  </div>

                  <span className="rounded-full bg-[#8C5A3C]/10 px-2 py-1 text-xs font-medium text-[#8C5A3C]">
                    Done
                  </span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6 rounded-xl bg-[#4B2E2B] p-4 text-[#FFF3E3]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">
                  Project progress
                </p>
                <p className="text-sm font-bold">68%</p>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#FFF3E3]/20">
                <div className="h-full w-[68%] rounded-full bg-[#C08552]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-y border-[#C08552]/20 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-[#C08552]">
              EVERYTHING IN ONE PLACE
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Work smarter, together.
            </h2>

            <p className="mt-4 leading-7 text-[#8C5A3C]">
              A connected workspace designed to help teams stay
              organised, focused, and aligned.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-[#C08552]/20 bg-[#FFF3E3] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#C08552]/15 text-xl font-bold text-[#8C5A3C]">
                01
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Task Management
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8C5A3C]">
                Create tasks, set priorities, and track progress
                without losing sight of your goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-[#C08552]/20 bg-[#FFF3E3] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#C08552]/15 text-xl font-bold text-[#8C5A3C]">
                02
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Project Spaces
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8C5A3C]">
                Keep project discussions, tasks, and resources
                organised in dedicated spaces.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-[#C08552]/20 bg-[#FFF3E3] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#C08552]/15 text-xl font-bold text-[#8C5A3C]">
                03
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Team Collaboration
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8C5A3C]">
                Bring people together with shared updates,
                conversations, and activity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl border border-[#C08552]/20 bg-[#FFF3E3] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#C08552]/15 text-xl font-bold text-[#8C5A3C]">
                04
              </div>

              <h3 className="mt-5 text-lg font-bold">
                AI Assistance
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8C5A3C]">
                Make sense of your work with AI-powered summaries
                and document assistance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <div className="grid items-center gap-10 rounded-3xl bg-[#4B2E2B] p-8 text-[#FFF3E3] md:grid-cols-2 md:p-14">

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#C08552]">
              ABOUT PULSEWORKS AI
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
              A workspace that
              <br />
              works with you.
            </h2>
          </div>

          <div>
            <p className="leading-7 text-[#FFF3E3]/75">
              PulseWorks AI brings your projects, tasks, and team
              collaboration together in a single workspace.
              Built to reduce scattered workflows and make
              everyday work easier to manage.
            </p>

            <Button
              asChild
              className="mt-6 bg-[#C08552] text-[#4B2E2B] hover:bg-[#FFF3E3]"
            >
              <Link to="/register">
                Create your account →
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C08552]/20 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">

          <p className="text-lg font-extrabold">
            PulseWorks
            <span className="text-[#C08552]"> AI</span>
          </p>

          <p className="text-sm text-[#8C5A3C]">
            A secure space for meaningful work.
          </p>

          <p className="text-xs text-[#8C5A3C]/70">
            © 2026 PulseWorks AI
          </p>

        </div>
      </footer>

    </div>
  );
}

export default Landing;
