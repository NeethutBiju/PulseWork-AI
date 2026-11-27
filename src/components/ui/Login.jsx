
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address",
  }),

  password: z.string().min(1, {
    message: "Please enter your password",
  }),
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

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#D2CF9A] px-4 py-10">

      {/* Background decoration */}
      <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#9A7E3B]/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 size-80 rounded-full bg-[#323D25]/20 blur-3xl" />

      <Card className="relative w-full max-w-md overflow-hidden border-2 border-[#9A7E3B]/40 bg-white shadow-2xl shadow-[#28301C]/20">

        {/* Card accent */}
        <div className="h-2 bg-[#9A7E3B]" />

        <CardHeader className="space-y-4 bg-[#28301C] px-7 pb-7 pt-8 text-center">

          <p className="text-3xl font-extrabold tracking-tight text-[#D2CF9A]">
            PulseWorks{" "}
            <span className="text-[#9A7E3B]">AI</span>
          </p>

          <div className="mx-auto h-1 w-14 rounded-full bg-[#9A7E3B]" />

          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-white">
              Welcome back
            </CardTitle>

            <CardDescription className="text-[#D2CF9A]/80">
              Sign in to your secure workspace
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-7 pb-7 pt-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-[#28301C]">
                Email Address
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                {...register("email")}
                className="h-12 border-2 border-[#D2CF9A] bg-[#D2CF9A]/15 px-4 text-[#28301C] placeholder:text-[#323D25]/50 focus-visible:border-[#9A7E3B] focus-visible:ring-2 focus-visible:ring-[#9A7E3B]/30"
              />

              {errors.email && (
                <p className="text-sm font-medium text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="font-semibold text-[#28301C]">
                Password
              </Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  {...register("password")}
                  className="h-12 border-2 border-[#D2CF9A] bg-[#D2CF9A]/15 px-4 pr-20 text-[#28301C] placeholder:text-[#323D25]/50 focus-visible:border-[#9A7E3B] focus-visible:ring-2 focus-visible:ring-[#9A7E3B]/30"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#9A7E3B] hover:text-[#28301C]"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>

              {errors.password && (
                <p className="text-sm font-medium text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-[#9A7E3B] hover:text-[#28301C] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full bg-[#323D25] text-base font-bold text-white shadow-md transition hover:bg-[#28301C] hover:shadow-lg"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="border-t border-[#D2CF9A]/60 bg-[#D2CF9A]/20 px-7 py-5">
          <p className="w-full text-center text-sm text-[#323D25]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-[#9A7E3B] hover:text-[#28301C] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
