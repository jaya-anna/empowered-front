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
import NavBar from "./components/Navbar";

function App() {

  return (
    <div className="app">

        <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/forum" element={<ForumPage />} />

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
