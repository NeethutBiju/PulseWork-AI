
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  CheckCircle2,
  Clock,
  Plus,
  Search,
  CalendarDays,
  ArrowUpRight,
  ListTodo,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Sample tasks for the dashboard
export const sampleTasks = [
  {
    id: 1,
    title: "Design Login Page",
    description: "Create the login page UI",
    employee: "Employee 1",
    priority: "High",
    status: "In Progress",
    dueDate: "2026-12-10",
  },
  {
    id: 2,
    title: "Develop Dashboard",
    description: "Build the admin dashboard",
    employee: "Employee 2",
    priority: "Medium",
    status: "Pending",
    dueDate: "2026-12-12",
  },
  {
    id: 3,
    title: "Database Integration",
    description: "Connect the application to MongoDB",
    employee: "Employee 3",
    priority: "High",
    status: "Completed",
    dueDate: "2026-12-08",
  },
  {
    id: 4,
    title: "Testing and Validation",
    description: "Test the application functionality",
    employee: "Employee 1",
    priority: "Low",
    status: "Pending",
    dueDate: "2026-12-15",
  },
];

// Format date for display
function formatDate(dateString) {
  if (!dateString) {
    return "No due date";
  }

  const date = new Date(dateString + "T00:00:00");

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Priority badge styles
function getPriorityStyle(priority) {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700";

    case "Medium":
      return "bg-orange-100 text-orange-700";

    case "Low":
      return "bg-green-100 text-green-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

// Status badge styles
function getStatusStyle(status) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";

    case "In Progress":
      return "bg-blue-100 text-blue-700";

    case "Pending":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}

function AdminDashboard({ tasks = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Prevent undefined or invalid task data from crashing the page
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  // Dashboard statistics
  const totalTasks = safeTasks.length;

  const completedTasks = safeTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = safeTasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = safeTasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  // Search tasks by title or employee
  const filteredTasks = safeTasks.filter((task) => {
    const title = task.title || "";
    const employee = task.employee || "";

    const searchValue = searchTerm.toLowerCase();

    return (
      title.toLowerCase().includes(searchValue) ||
      employee.toLowerCase().includes(searchValue)
    );
  });
  const completionRate =
  totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);  

  return (
    <div
      className="min-h-screen bg-[#FFF3E3] text-[#4B2E2B]"
      style={{
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r border-[#E8D4BF] bg-[#F7E5D0] p-6 md:flex">

          {/* Logo */}
          <Link to="/" className="mb-10">
            <h1
              className="text-3xl font-semibold tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              PulseWorks
              <span className="text-[#C08552]">.</span>
            </h1>

            <p className="mt-1 text-xs tracking-[0.2em] text-[#8C5A3C]">
              AI WORKSPACE
            </p>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">

            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 rounded-xl bg-[#4B2E2B] px-4 py-3 text-sm font-medium text-[#FFF3E3]"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#6F4536] transition hover:bg-[#EED9C3]"
            >
              <ClipboardList size={18} />
              Tasks
            </Link>

            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#6F4536] transition hover:bg-[#EED9C3]"
            >
              <Users size={18} />
              Employees
            </Link>
          </nav>

          {/* Sidebar bottom */}
          <div className="mt-auto rounded-2xl bg-[#4B2E2B] p-5 text-[#FFF3E3]">
            <p
              className="text-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Work better.
            </p>

            <p className="mt-2 text-xs leading-5 text-[#E8D4BF]">
              Keep your team organized and your tasks moving.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">

          {/* Top navigation */}
          <header className="mb-6 flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="text-sm text-[#8C5A3C]">
                Admin Workspace
              </p>

              <h2
                className="mt-1 text-3xl font-medium"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Dashboard
              </h2>
            </div>

            <Link to="/tasks/new">
              <Button className="rounded-xl bg-[#8C5A3C] px-5 text-white hover:bg-[#4B2E2B]">
                <Plus size={18} className="mr-2" />
                Create Task
              </Button>
            </Link>
          </header>

                
          
{/* Welcome Hero Section */}
<section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">

  {/* Welcome content */}
  <div className="flex flex-col justify-center rounded-3xl border border-[#E8D4BF] bg-[#F7E5D0] p-7 sm:p-9">

    <div className="mb-5 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#C08552]" />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C5A3C]">
        Admin Workspace
      </p>
    </div>

    <h1
      className="max-w-xl text-4xl font-medium leading-tight sm:text-5xl"
      style={{
        fontFamily: "'Playfair Display', serif",
      }}
    >
      Let&apos;s get things
      <br />
      <span className="italic text-[#C08552]">
        moving.
      </span>
    </h1>

    <p className="mt-4 max-w-md text-sm leading-6 text-[#6F4536]">
      Your team&apos;s work, progress, and priorities —
      all in one place.
    </p>

    <div className="mt-7 flex flex-wrap items-center gap-3">

      <Link to="/tasks/new">
        <Button className="rounded-xl bg-[#8C5A3C] px-5 text-white hover:bg-[#4B2E2B]">
          <Plus size={17} className="mr-2" />
          Create a task
        </Button>
      </Link>

      <span className="text-xs text-[#8C5A3C]">
        {totalTasks} tasks in your workspace
      </span>
    </div>
  </div>

  {/* Progress panel */}
  <div className="relative overflow-hidden rounded-3xl bg-[#4B2E2B] p-7 text-[#FFF3E3] sm:p-8">

    {/* Decorative circle */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#C08552]/30" />

    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#C08552]/30" />

    <div className="relative">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#D9B99A]">
            Team Progress
          </p>

          <h2
            className="mt-3 text-3xl font-medium"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {completionRate}%
          </h2>

          <p className="mt-1 text-sm text-[#E8D4BF]">
            Tasks completed
          </p>
        </div>

        <div className="rounded-2xl bg-[#6F4536] p-3">
          <CheckCircle2 size={24} className="text-[#F7E5D0]" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-7">
        <div className="mb-2 flex items-center justify-between text-xs text-[#D9B99A]">
          <span>Overall completion</span>
          <span>{completedTasks}/{totalTasks}</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#6F4536]">
          <div
            className="h-full rounded-full bg-[#D9A879] transition-all duration-500"
            style={{
              width: `${completionRate}%`,
            }}
          />
        </div>
      </div>

      {/* Mini statistics */}
      <div className="mt-7 grid grid-cols-2 gap-3">

        <div className="rounded-2xl border border-[#8C5A3C] bg-[#5B3932] p-4">
          <p className="text-xs text-[#D9B99A]">
            In Progress
          </p>

          <p className="mt-2 text-2xl font-semibold">
            {inProgressTasks}
          </p>
        </div>

        <div className="rounded-2xl border border-[#8C5A3C] bg-[#5B3932] p-4">
          <p className="text-xs text-[#D9B99A]">
            Pending
          </p>

          <p className="mt-2 text-2xl font-semibold">
            {pendingTasks}
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

          {/* Statistics */}
          <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* Total tasks */}
            <Card className="rounded-2xl border-[#E8D4BF] bg-white/70 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#F7E5D0] p-3">
                    <ListTodo size={20} className="text-[#8C5A3C]" />
                  </div>

                  <ArrowUpRight size={18} className="text-[#C08552]" />
                </div>

                <p className="mt-5 text-sm text-[#8C5A3C]">
                  Total Tasks
                </p>

                <h3 className="mt-1 text-3xl font-semibold">
                  {totalTasks}
                </h3>
              </CardContent>
            </Card>

            {/* Completed */}
            <Card className="rounded-2xl border-[#E8D4BF] bg-white/70 shadow-sm">
              <CardContent className="p-5">
                <div className="rounded-xl bg-green-100 p-3 w-fit">
                  <CheckCircle2 size={20} className="text-green-700" />
                </div>

                <p className="mt-5 text-sm text-[#8C5A3C]">
                  Completed
                </p>

                <h3 className="mt-1 text-3xl font-semibold">
                  {completedTasks}
                </h3>
              </CardContent>
            </Card>

            {/* In progress */}
            <Card className="rounded-2xl border-[#E8D4BF] bg-white/70 shadow-sm">
              <CardContent className="p-5">
                <div className="rounded-xl bg-blue-100 p-3 w-fit">
                  <Clock size={20} className="text-blue-700" />
                </div>

                <p className="mt-5 text-sm text-[#8C5A3C]">
                  In Progress
                </p>

                <h3 className="mt-1 text-3xl font-semibold">
                  {inProgressTasks}
                </h3>
              </CardContent>
            </Card>

            {/* Pending */}
            <Card className="rounded-2xl border-[#E8D4BF] bg-white/70 shadow-sm">
              <CardContent className="p-5">
                <div className="rounded-xl bg-orange-100 p-3 w-fit">
                  <CalendarDays size={20} className="text-orange-700" />
                </div>

                <p className="mt-5 text-sm text-[#8C5A3C]">
                  Pending
                </p>

                <h3 className="mt-1 text-3xl font-semibold">
                  {pendingTasks}
                </h3>
              </CardContent>
            </Card>
          </section>

          {/* Task list */}
          <section>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

              <div>
                <h2
                  className="text-2xl font-medium"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Recent Tasks
                </h2>

                <p className="mt-1 text-sm text-[#8C5A3C]">
                  Manage and monitor your team&apos;s tasks
                </p>
              </div>

              <Link
                to="/tasks/new"
                className="text-sm font-semibold text-[#8C5A3C] hover:text-[#4B2E2B]"
              >
                + New task
              </Link>
            </div>

            {/* Search */}
            <div className="mb-5 flex items-center gap-3 rounded-xl border border-[#E8D4BF] bg-white/70 px-4">
              <Search size={18} className="text-[#8C5A3C]" />

              <Input
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search tasks or employees..."
                className="border-0 bg-transparent shadow-none focus-visible:ring-0"
              />
            </div>

            {/* Table */}
            <Card className="overflow-hidden rounded-2xl border-[#E8D4BF] bg-white/80 shadow-sm">
              <CardContent className="overflow-x-auto p-0">

                <table className="w-full min-w-[750px] text-left">
                  <thead className="border-b border-[#E8D4BF] bg-[#F7E5D0]/60">
                    <tr>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#8C5A3C]">
                        Task
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#8C5A3C]">
                        Employee
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#8C5A3C]">
                        Priority
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#8C5A3C]">
                        Due Date
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#8C5A3C]">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredTasks.length > 0 ? (
                      filteredTasks.map((task) => (
                        <tr
                          key={task.id}
                          className="border-b border-[#F0E2D3] transition hover:bg-[#FFF3E3]/70"
                        >
                          {/* Task title */}
                          <td className="px-5 py-5">
                            <p className="font-semibold text-[#4B2E2B]">
                              {task.title || "Untitled Task"}
                            </p>

                            <p className="mt-1 max-w-xs truncate text-xs text-[#8C5A3C]">
                              {task.description || "No description"}
                            </p>
                          </td>

                          {/* Employee */}
                          <td className="px-5 py-5 text-sm text-[#6F4536]">
                            {task.employee || "Unassigned"}
                          </td>

                          {/* Priority */}
                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                                task.priority
                              )}`}
                            >
                              {task.priority || "Not set"}
                            </span>
                          </td>

                          {/* Due date */}
                          <td className="px-5 py-5 text-sm text-[#6F4536]">
                            {formatDate(task.dueDate)}
                          </td>

                          {/* Status */}
                          <td className="px-5 py-5">
                            <span
                              className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                                task.status
                              )}`}
                            >
                              {task.status || "Not set"}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-5 py-16 text-center"
                        >
                          <ClipboardList
                            size={32}
                            className="mx-auto mb-3 text-[#C08552]"
                          />

                          <p className="font-semibold text-[#4B2E2B]">
                            No tasks found
                          </p>

                          <p className="mt-1 text-sm text-[#8C5A3C]">
                            Try another search or create a new task.
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <footer className="mt-10 border-t border-[#E8D4BF] pt-5 text-center text-xs text-[#8C5A3C]">
            PulseWorks AI · Admin Workspace
          </footer>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
