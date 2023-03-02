import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/Privateroute";
import ForumPage from "./pages/ForumPage";

function App() {
  return (
    <div
      className="app"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <button component={Link} to="/" variant="subtle" color="cyan">
        Home
      </button>

      <button component={Link} to="/signup" variant="subtle" color="cyan">
        Signup
      </button>
      <button component={Link} to="/login" variant="subtle" color="cyan">
        Login
      </button>
      <button component={Link} to="/pofile" variant="subtle" color="cyan">
        Profile
      </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </div>
  );
}

export default App;
