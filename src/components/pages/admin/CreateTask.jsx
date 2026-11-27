
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

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

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Zod validation schema
const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Task title must contain at least 3 characters"),

  description: z
    .string()
    .trim()
    .min(1, "Description is required"),

  assignedEmployee: z
    .string()
    .min(1, "Please select an employee"),

  priority: z
    .string()
    .refine(
      (value) => ["Low", "Medium", "High"].includes(value),
      "Please select a valid priority"
    ),

  dueDate: z
    .string()
    .min(1, "Due date is required")
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "Please enter a valid date"
    )
    .refine(
      (value) => value >= getTodayDate(),
      "Due date cannot be in the past"
    ),

  status: z
    .string()
    .refine(
      (value) =>
        ["Pending", "In Progress", "Completed"].includes(value),
      "Please select a valid task status"
    ),
});

function CreateTask({ onCreateTask }) {
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const today = getTodayDate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      assignedEmployee: "",
      priority: "",
      dueDate: "",
      status: "Pending",
    },
  });

  // Runs only when validation succeeds
  const onSubmit = (data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      employee: data.assignedEmployee,
      priority: data.priority,
      status: data.status,
      dueDate: data.dueDate,
    };

    // Send the task to App.jsx
    onCreateTask(newTask);

    console.log("Task created successfully:");
    console.log(newTask);

    setSuccessMessage("Task created successfully!");

    reset();

    // Return to Admin Dashboard
    navigate("/admin/dashboard");
  };

  return (
    <div
      className="min-h-screen bg-[#FFF3E3] px-4 py-10"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            className="text-sm font-medium text-[#6F4536] hover:text-[#4B2E2B]"
          >
            ← Back to Dashboard
          </button>

          <h1
            className="mt-5 text-3xl font-bold text-[#4B2E2B]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Create New Task
          </h1>

          <p className="mt-2 text-[#6F4536]">
            Add a task and assign it to an employee.
          </p>
        </div>

        {/* Task Form */}
        <Card className="border-[#C08552]/30 bg-white shadow-lg">
          <CardHeader>
            <CardTitle
              className="text-2xl text-[#4B2E2B]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Task Details
            </CardTitle>

            <CardDescription>
              Fill in the required information below.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Task Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Task Title</Label>

                <Input
                  id="title"
                  placeholder="Enter task title"
                  {...register("title")}
                />

                {errors.title && (
                  <p className="text-sm text-red-600">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>

                <textarea
                  id="description"
                  placeholder="Describe the task..."
                  rows={4}
                  {...register("description")}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C08552]"
                />

                {errors.description && (
                  <p className="text-sm text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Assigned Employee */}
              <div className="space-y-2">
                <Label htmlFor="assignedEmployee">
                  Assigned Employee
                </Label>

                <select
                  id="assignedEmployee"
                  {...register("assignedEmployee")}
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[#C08552]"
                >
                  <option value="">Select an employee</option>
                  <option value="Employee 1">Employee 1</option>
                  <option value="Employee 2">Employee 2</option>
                  <option value="Employee 3">Employee 3</option>
                </select>

                {errors.assignedEmployee && (
                  <p className="text-sm text-red-600">
                    {errors.assignedEmployee.message}
                  </p>
                )}
              </div>

              {/* Priority and Status */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Priority */}
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>

                  <select
                    id="priority"
                    {...register("priority")}
                    className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[#C08552]"
                  >
                    <option value="">Select priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>

                  {errors.priority && (
                    <p className="text-sm text-red-600">
                      {errors.priority.message}
                    </p>
                  )}
                </div>

                {/* Status */}
                <div className="space-y-2">
                  <Label htmlFor="status">Task Status</Label>

                  <select
                    id="status"
                    {...register("status")}
                    className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[#C08552]"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>

                  {errors.status && (
                    <p className="text-sm text-red-600">
                      {errors.status.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Due Date */}
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>

                <Input
                  id="dueDate"
                  type="date"
                  min={today}
                  {...register("dueDate")}
                />

                <p className="text-xs text-[#6F4536]">
                  Select today or a future date.
                </p>

                {errors.dueDate && (
                  <p className="text-sm text-red-600">
                    {errors.dueDate.message}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {successMessage && (
                <p className="rounded-md bg-green-50 p-3 text-sm text-green-700">
                  {successMessage}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4B2E2B] text-white hover:bg-[#8C5A3C]"
              >
                {isSubmitting ? "Creating Task..." : "Create Task"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CreateTask;
