
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/ui/Login";
import Register from "./components/ui/Register";
import LandingPage from "./components/ui/LandingPage";
import CreateTask from "./components/ui/CreateTask";
import AdminDashboard from "./components/ui/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Login page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register page */}
        <Route
          path="/register"
          element={<Register />}
        />
        <Route path="/tasks/new" element={<CreateTask />} />
        <Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
