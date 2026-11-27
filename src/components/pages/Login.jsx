
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen bg-[#FFF3E3] p-4 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left Branding Section */}
        <div className="relative hidden overflow-hidden bg-[#4B2E2B] p-12 text-[#FFF3E3] lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C08552]/30" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full border border-[#C08552]/30" />
          <div className="absolute right-10 top-40 h-32 w-32 rounded-full bg-[#C08552]/10" />

          <div className="relative z-10">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              PulseWorks <span className="text-[#C08552]">AI</span>
            </Link>

            <div className="mt-24">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C08552]">
                Welcome Back
              </p>

              <h1 className="max-w-md text-5xl font-bold leading-tight">
                Your work.
                <br />
                Your flow.
                <br />
                <span className="text-[#C08552]">Your progress.</span>
              </h1>

              <p className="mt-6 max-w-sm text-base leading-7 text-[#FFF3E3]/70">
                Bring your tasks, ideas, and team collaboration together in one
                focused workspace.
              </p>
            </div>
          </div>

          <div className="relative z-10 border-t border-[#FFF3E3]/15 pt-6">
            <p className="text-sm text-[#FFF3E3]/60">
              Plan smarter. Work better. Move forward.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-14">
          <div className="w-full max-w-md">

            {/* Mobile Branding */}
            <div className="mb-8 lg:hidden">
              <Link
                to="/"
                className="text-2xl font-bold tracking-tight text-[#4B2E2B]"
              >
                PulseWorks <span className="text-[#C08552]">AI</span>
              </Link>
            </div>

            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader className="space-y-3 px-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#C08552]">
                  Account Login
                </p>

                <CardTitle className="text-3xl font-bold text-[#4B2E2B] sm:text-4xl">
                  Welcome back
                </CardTitle>

                <CardDescription className="text-base text-[#8C5A3C]">
                  Enter your details to access your workspace.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-0">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#4B2E2B]">
                      Email address
                    </Label>

                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      {...register("email")}
                      className="h-12 rounded-xl border-[#E8D3BD] bg-[#FFF9F2] text-[#4B2E2B] placeholder:text-[#B89A83] focus-visible:ring-[#C08552]"
                    />

                    {errors.email && (
                      <p className="text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-[#4B2E2B]">
                        Password
                      </Label>

                      <Link
                        to="/forgot-password"
                        className="text-sm font-medium text-[#A66D42] hover:text-[#4B2E2B]"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        {...register("password")}
                        className="h-12 rounded-xl border-[#E8D3BD] bg-[#FFF9F2] pr-16 text-[#4B2E2B] placeholder:text-[#B89A83] focus-visible:ring-[#C08552]"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#A66D42] hover:text-[#4B2E2B]"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>

                    {errors.password && (
                      <p className="text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-xl bg-[#4B2E2B] text-base font-semibold text-white transition hover:bg-[#6F4536]"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </Button>

                  <p className="pt-3 text-center text-sm text-[#8C5A3C]">
                    Don&apos;t have an account?{" "}
                    <Link
                      to="/register"
                      className="font-semibold text-[#A66D42] hover:text-[#4B2E2B]"
                    >
                      Create account
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
