
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
import AdminDashboard, {sampleTasks} from "./components/pages/admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/landingpage"
          element={<LandingPage />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route path="/tasks/new" 
        element={<CreateTask />} />
        <Route
        path="/admin/dashboard"
        element={<AdminDashboard tasks={sampleTasks} />}
/>

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/landingpage" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
