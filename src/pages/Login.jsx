
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

function Login() {
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
              Welcome back
            </CardTitle>

            <CardDescription className="text-[#323D25]/70">
              Sign in to continue to your workspace
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#28301C]">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-[#28301C]">
                  Password
                </Label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#9A7E3B] hover:text-[#323D25]"
                >
                  Forgot password?
                </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="border-[#D2CF9A] focus-visible:ring-[#9A7E3B]"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-[#323D25]/80">
              <input
                type="checkbox"
                className="size-4 accent-[#323D25]"
              />
              Remember me
            </label>

            <Button
              type="submit"
              className="w-full bg-[#323D25] text-white hover:bg-[#28301C]"
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#D2CF9A]" />
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-[#323D25]/60">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-[#D2CF9A] text-[#323D25] hover:bg-[#D2CF9A]/30"
            >
              Continue with Google
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-[#323D25]/80">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#9A7E3B] hover:text-[#323D25]"
            >
              Create account
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
