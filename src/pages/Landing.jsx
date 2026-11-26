
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function Landing() {
  return (
    <div className="min-h-screen bg-[#D2CF9A]/20">
      <nav className="border-b border-[#D2CF9A] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight text-[#28301C]">
              PulseWorks{" "}
              <span className="text-[#9A7E3B]">AI</span>
            </span>

            <span className="text-xs tracking-wide text-[#323D25]/60">
              Secure Enterprise Workspace
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-[#323D25] hover:text-[#9A7E3B]"
            >
              Home
            </Link>

            <a
              href="#features"
              className="text-sm font-medium text-[#323D25]/70 hover:text-[#9A7E3B]"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-[#323D25]/70 hover:text-[#9A7E3B]"
            >
              About
            </a>
          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="text-[#323D25] hover:bg-[#D2CF9A]/30 hover:text-[#28301C]"
            >
              <Link to="/login">
                Sign In
              </Link>
            </Button>

            <Button
              asChild
              className="bg-[#323D25] text-white hover:bg-[#28301C]"
            >
              <Link to="/register">
                Get Started
              </Link>
            </Button>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Landing;
