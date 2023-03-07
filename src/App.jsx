import { Route, Routes } from "react-router-dom";
import { AppShell, Box, Button, Header } from '@mantine/core'
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
import FAQPage from "./pages/FAQPage";
import OutletComponent from "./components/OutletComponent";

import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />

        <Route path="/" element={<OutletComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/update/:userId" element={<UpdatePage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile>
                  <UpdatePage />
                </Profile>
              </PrivateRoute>
            }
          />
          <Route path="/forum" element={<ForumPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
