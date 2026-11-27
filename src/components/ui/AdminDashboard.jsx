
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  LayoutDashboard,
  CheckSquare,
  Users,
  FolderKanban,
  Settings,
  Plus,
  Search,
  Bell,
  CircleUserRound,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Sample task data for frontend development
const tasks = [
  {
    id: 1,
    title: "Build Security Dashboard",
    employee: "Employee 1",
    priority: "High",
    status: "In Progress",
    dueDate: "Dec 10, 2026",
  },
  {
    id: 2,
    title: "Update Project Documentation",
    employee: "Employee 2",
    priority: "Medium",
    status: "Pending",
    dueDate: "Dec 12, 2026",
  },
  {
    id: 3,
    title: "Review Authentication Module",
    employee: "Employee 3",
    priority: "High",
    status: "Completed",
    dueDate: "Dec 08, 2026",
  },
  {
    id: 4,
    title: "Design Landing Page",
    employee: "Employee 1",
    priority: "Low",
    status: "Pending",
    dueDate: "Dec 15, 2026",
  },
];

function AdminDashboard() {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div className="flex min-h-screen bg-[#FFF3E3]">

      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-[#C08552]/20 bg-white p-6 md:flex">

        {/* Logo */}
        <Link to="/" className="mb-10">
          <h1 className="text-2xl font-bold text-[#4B2E2B]">
            PulseWorks
            <span className="text-[#C08552]"> AI</span>
          </h1>

          <p className="mt-1 text-xs text-[#8C5A3C]">
            Enterprise Workspace
          </p>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 rounded-lg bg-[#4B2E2B] px-4 py-3 text-sm font-medium text-white"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/admin/tasks"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#8C5A3C] transition hover:bg-[#FFF3E3]"
          >
            <CheckSquare size={18} />
            Manage Tasks
          </Link>

          <Link
            to="/admin/employees"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#8C5A3C] transition hover:bg-[#FFF3E3]"
          >
            <Users size={18} />
            Employees
          </Link>

          <Link
            to="/admin/projects"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#8C5A3C] transition hover:bg-[#FFF3E3]"
          >
            <FolderKanban size={18} />
            Projects
          </Link>

        </nav>

        {/* Settings */}
        <Link
          to="/admin/settings"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#8C5A3C] transition hover:bg-[#FFF3E3]"
        >
          <Settings size={18} />
          Settings
        </Link>

      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1">

        {/* Top Navbar */}
        <header className="flex items-center justify-between border-b border-[#C08552]/20 bg-white px-5 py-4 md:px-8">

          <div>
            <h2 className="text-lg font-semibold text-[#4B2E2B]">
              Admin Dashboard
            </h2>

            <p className="text-sm text-[#8C5A3C]">
              Manage your workspace and team
            </p>
          </div>

          <div className="flex items-center gap-4">

            <button
              type="button"
              aria-label="Notifications"
              className="rounded-full p-2 text-[#8C5A3C] hover:bg-[#FFF3E3]"
            >
              <Bell size={20} />
            </button>

            <div className="flex items-center gap-2">
              <CircleUserRound
                size={30}
                className="text-[#C08552]"
              />

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-[#4B2E2B]">
                  Admin
                </p>

                <p className="text-xs text-[#8C5A3C]">
                  Administrator
                </p>
              </div>
            </div>

          </div>
        </header>

        {/* Dashboard Content */}
        <div className="space-y-8 p-5 md:p-8">

          {/* Welcome Section */}
          <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h1 className="text-2xl font-bold text-[#4B2E2B]">
                Welcome back, Admin!
              </h1>

              <p className="mt-1 text-sm text-[#8C5A3C]">
                Here is what is happening in your workspace.
              </p>
            </div>

            <Link to="/tasks/new">
              <Button className="bg-[#4B2E2B] text-white hover:bg-[#8C5A3C]">
                <Plus size={18} className="mr-2" />
                Create Task
              </Button>
            </Link>

          </section>

          {/* Statistics Cards */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <Card className="border-[#C08552]/20 bg-white shadow-sm">
              <CardContent className="flex items-center justify-between p-5">

                <div>
                  <p className="text-sm text-[#8C5A3C]">
                    Total Tasks
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#4B2E2B]">
                    {totalTasks}
                  </h3>
                </div>

                <div className="rounded-xl bg-[#FFF3E3] p-3 text-[#C08552]">
                  <CheckSquare size={24} />
                </div>

              </CardContent>
            </Card>

            <Card className="border-[#C08552]/20 bg-white shadow-sm">
              <CardContent className="flex items-center justify-between p-5">

                <div>
                  <p className="text-sm text-[#8C5A3C]">
                    Completed
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#4B2E2B]">
                    {completedTasks}
                  </h3>
                </div>

                <div className="rounded-xl bg-green-50 p-3 text-green-700">
                  <CheckCircle2 size={24} />
                </div>

              </CardContent>
            </Card>

            <Card className="border-[#C08552]/20 bg-white shadow-sm">
              <CardContent className="flex items-center justify-between p-5">

                <div>
                  <p className="text-sm text-[#8C5A3C]">
                    In Progress
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#4B2E2B]">
                    {inProgressTasks}
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                  <Clock3 size={24} />
                </div>

              </CardContent>
            </Card>

            <Card className="border-[#C08552]/20 bg-white shadow-sm">
              <CardContent className="flex items-center justify-between p-5">

                <div>
                  <p className="text-sm text-[#8C5A3C]">
                    Pending
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-[#4B2E2B]">
                    {pendingTasks}
                  </h3>
                </div>

                <div className="rounded-xl bg-orange-50 p-3 text-orange-700">
                  <AlertCircle size={24} />
                </div>

              </CardContent>
            </Card>

          </section>

          {/* Tasks Table */}
          <section>

            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>
                <h2 className="text-xl font-bold text-[#4B2E2B]">
                  Recent Tasks
                </h2>

                <p className="mt-1 text-sm text-[#8C5A3C]">
                  Overview of tasks assigned to your team
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-[#C08552]/30 bg-white px-3 py-2">
                <Search size={18} className="text-[#8C5A3C]" />

                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="w-full bg-transparent text-sm outline-none sm:w-40"
                />
              </div>

            </div>

            <Card className="overflow-hidden border-[#C08552]/20 bg-white shadow-sm">

              <CardContent className="overflow-x-auto p-0">

                <table className="w-full min-w-[700px] text-left">

                  <thead className="bg-[#FFF3E3]">
                    <tr className="text-sm text-[#8C5A3C]">

                      <th className="px-5 py-4 font-semibold">
                        Task
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Assigned To
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Priority
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Status
                      </th>

                      <th className="px-5 py-4 font-semibold">
                        Due Date
                      </th>

                    </tr>
                  </thead>

                  <tbody>
                    {tasks.map((task) => (
                      <tr
                        key={task.id}
                        className="border-t border-[#C08552]/10 text-sm"
                      >

                        <td className="px-5 py-4 font-medium text-[#4B2E2B]">
                          {task.title}
                        </td>

                        <td className="px-5 py-4 text-[#8C5A3C]">
                          {task.employee}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              task.priority === "High"
                                ? "bg-red-50 text-red-700"
                                : task.priority === "Medium"
                                ? "bg-orange-50 text-orange-700"
                                : "bg-green-50 text-green-700"
                            }`}
                          >
                            {task.priority}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              task.status === "Completed"
                                ? "bg-green-50 text-green-700"
                                : task.status === "In Progress"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-orange-50 text-orange-700"
                            }`}
                          >
                            {task.status}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-[#8C5A3C]">
                          {task.dueDate}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>

              </CardContent>
            </Card>

          </section>

        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
