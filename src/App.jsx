
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import LandingPage from "./components/pages/LandingPage";
import CreateTask from "./components/pages/admin/CreateTask";
import AdminDashboard, {
  sampleTasks,
} from "./components/pages/admin/AdminDashboard";

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-[#FFF3E3] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-sm p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-[#4B2E2B]">
          {title}
        </h1>

        <p className="mt-4 text-[#6F4536]">
          This section will be connected to the workspace soon.
        </p>

        <div className="flex justify-center gap-3 mt-8">
          <a
            href="/admin/dashboard"
            className="rounded-xl bg-[#8C5A3C] text-white px-5 py-3"
          >
            Dashboard
          </a>

          <a
            href="/landingpage"
            className="rounded-xl border border-[#C08552] text-[#8C5A3C] px-5 py-3"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState(sampleTasks);

  // Create a task
  const handleCreateTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now(),
    };

    setTasks((previousTasks) => [
      taskWithId,
      ...previousTasks,
    ]);
  };

  // Update an existing task
  const handleUpdateTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id
          ? { ...task, ...updatedTask }
          : task
      )
    );
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={<Navigate to="/landingpage" replace />}
        />

        <Route
          path="/landingpage"
          element={<LandingPage />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Admin task pages */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminDashboard
              tasks={tasks}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          }
        />

        <Route
          path="/tasks/new"
          element={
            <CreateTask
              onCreateTask={handleCreateTask}
            />
          }
        />

        {/* Dashboard sidebar destinations */}
        <Route
          path="/admin/tasks"
          element={
            <AdminDashboard
              tasks={tasks}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          }
        />

        <Route
          path="/admin/employees"
          element={<PlaceholderPage title="Employees" />}
        />

        <Route
          path="/admin/projects"
          element={<PlaceholderPage title="Projects" />}
        />

        <Route
          path="/admin/settings"
          element={<PlaceholderPage title="Settings" />}
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<Navigate to="/landingpage" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
