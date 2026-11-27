
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

const registerSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters",
    }),

    email: z.string().email({
      message: "Enter a valid email address",
    }),

    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters",
      })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Include uppercase, lowercase, number, and special character (@$!%*?&)",
        }
      ),

    confirmPassword: z.string().min(1, {
      message: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Registration data:", data);
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
              Create your account
            </CardTitle>

            <CardDescription className="text-[#D2CF9A]/80">
              Join your secure workspace
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-7 pb-7 pt-7">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-semibold text-[#28301C]">
                Full Name
              </Label>

              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                {...register("name")}
                className="h-12 border-2 border-[#D2CF9A] bg-[#D2CF9A]/15 px-4 text-[#28301C] placeholder:text-[#323D25]/50 focus-visible:border-[#9A7E3B] focus-visible:ring-2 focus-visible:ring-[#9A7E3B]/30"
              />

              {errors.name && (
                <p className="text-sm font-medium text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                  placeholder="Create a password"
                  autoComplete="new-password"
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

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="font-semibold text-[#28301C]"
              >
                Confirm Password
              </Label>

              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  {...register("confirmPassword")}
                  className="h-12 border-2 border-[#D2CF9A] bg-[#D2CF9A]/15 px-4 pr-20 text-[#28301C] placeholder:text-[#323D25]/50 focus-visible:border-[#9A7E3B] focus-visible:ring-2 focus-visible:ring-[#9A7E3B]/30"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#9A7E3B] hover:text-[#28301C]"
                >
                  {showConfirmPassword ? "HIDE" : "SHOW"}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-sm font-medium text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full bg-[#323D25] text-base font-bold text-white shadow-md transition hover:bg-[#28301C] hover:shadow-lg"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="border-t border-[#D2CF9A]/60 bg-[#D2CF9A]/20 px-7 py-5">
          <p className="w-full text-center text-sm text-[#323D25]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-[#9A7E3B] hover:text-[#28301C] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
