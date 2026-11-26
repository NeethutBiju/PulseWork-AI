
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#D2CF9A]/40 p-4">
      <Card className="w-full max-w-md border-[#D2CF9A] bg-white shadow-xl">
        <CardHeader className="space-y-4">
          <div>
            <p className="text-2xl font-extrabold tracking-tight text-[#28301C]">
              PulseWorks{" "}
              <span className="text-[#9A7E3B]">AI</span>
            </p>

            <p className="text-xs tracking-wide text-[#323D25]/70">
              Secure Enterprise Workspace
            </p>
          </div>

          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold text-[#28301C]">
              Create your account
            </CardTitle>

            <CardDescription className="text-[#323D25]/70">
              Get started with your workspace
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-[#28301C]"
              >
                Full Name
              </Label>

              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="border-[#D2CF9A] focus-visible:ring-[#9A7E3B]"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-[#28301C]"
              >
                Work Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                autoComplete="email"
                required
                className="border-[#D2CF9A] focus-visible:ring-[#9A7E3B]"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[#28301C]"
              >
                Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                required
                minLength={8}
                className="border-[#D2CF9A] focus-visible:ring-[#9A7E3B]"
              />

              <p className="text-xs text-[#323D25]/60">
                Use at least 8 characters.
              </p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-[#28301C]"
              >
                Confirm Password
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                autoComplete="new-password"
                required
                minLength={8}
                className="border-[#D2CF9A] focus-visible:ring-[#9A7E3B]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#323D25] text-white hover:bg-[#28301C]"
            >
              Create Account
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-[#323D25]/80">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#9A7E3B] hover:text-[#323D25]"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
