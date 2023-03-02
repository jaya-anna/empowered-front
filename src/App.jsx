import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/Privateroute";
import ForumPage from "./pages/ForumPage";
import InfoPage from "./pages/InfoPage";
import ResourcePage from "./pages/ResourcePage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("holder");
    setIsLoggedin(false);
    navigate("/login");
  };

  return (
    <div className="app">
      <Link component={Link} to="/" variant="subtle" color="cyan">
        Home
      </Link>

      <Link component={Link} to="/signup" variant="subtle" color="cyan">
        Signup
      </Link>
      <Link component={Link} to="/login" variant="subtle" color="cyan">
        Login
      </Link>
      <Link component={Link} to="/profile" variant="subtle" color="cyan">
        Profile
      </Link>
      <Link
        type="button"
        component={Link}
        to="/"
        variant="subtle"
        color="cyan"
        onClick={handleLogout}
      >
        Logout
      </Link>
      <Link component={Link} to="/resources" variant="subtle" color="cyan">
        Resources
      </Link>
      <Link component={Link} to="/about" variant="subtle" color="cyan">
        About
      </Link>
      <Link component={Link} to="/info" variant="subtle" color="cyan">
        Info
      </Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/info" element={<InfoPage />} />

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
