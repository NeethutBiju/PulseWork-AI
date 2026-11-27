
import { Link } from "react-router-dom";

function Navbar({ variant = "landing" }) {
  const isDashboard = variant === "dashboard";

  return (
    <nav
      className={`flex items-center justify-between ${
        isDashboard
          ? "border-b border-[#E8D3BD] bg-white px-6 py-4"
          : "bg-[#FFF3E3] px-6 py-5 md:px-12"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-tight text-[#4B2E2B]"
      >
        PulseWorks <span className="text-[#C08552]">AI</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden items-center gap-8 md:flex">
        {isDashboard ? (
          <>
            <Link
              to="/dashboard"
              className="font-medium text-[#6F4536] transition hover:text-[#C08552]"
            >
              Dashboard
            </Link>

            <Link
              to="/tasks"
              className="font-medium text-[#6F4536] transition hover:text-[#C08552]"
            >
              Tasks
            </Link>

            <Link
              to="/profile"
              className="font-medium text-[#6F4536] transition hover:text-[#C08552]"
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="font-medium text-[#6F4536] transition hover:text-[#C08552]"
            >
              Home
            </Link>

            <a
              href="#features"
              className="font-medium text-[#6F4536] transition hover:text-[#C08552]"
            >
              Features
            </a>

            <a
              href="#about"
              className="font-medium text-[#6F4536] transition hover:text-[#C08552]"
            >
              About
            </a>
          </>
        )}
      </div>

      {/* Right Side Button */}
      {!isDashboard && (
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden font-medium text-[#4B2E2B] transition hover:text-[#C08552] sm:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-[#4B2E2B] px-5 py-2.5 font-semibold text-white transition hover:bg-[#6F4536]"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
