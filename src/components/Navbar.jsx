import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppShell, Box, Button, Header, Text } from '@mantine/core';
import { SessionContext } from "../contexts/SessionContext";

function NavBar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("holder");
    setIsAuthenticated(false);
  };

  return (
    <AppShell padding={0}>
      <Header
        shadow="sm"
        padding={{ xs: 'sm', md: 'lg' }}
        position="static"
        borderBottom={0}
      >
        <Box display="flex" alignItems="center">
          <NavLink to="/">
            <Button variant="light">Home</Button>
          </NavLink>
          <Box marginLeft="auto">
            <nav>
              <NavLink to="/resources">
                <Button variant="light">Resources</Button>
              </NavLink>
              <NavLink to="/about">
                <Button variant="light">About</Button>
              </NavLink>
              <NavLink to="/info">
                <Button variant="light">Info</Button>
              </NavLink>
              <NavLink to="/forum">
                <Button variant="light">Forum</Button>
              </NavLink>
              <NavLink to="/faq">
                <Button variant="light">FAQ</Button>
              </NavLink>
              {isAuthenticated ? (
                <>
                  <NavLink to="/profile">
                    <Button variant="light">Profile</Button>
                  </NavLink>
                  <Button
                    component={NavLink}
                    to="/"
                    variant="light"
                    color="cyan"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink to="/signup">
                    <Button variant="light">Sign up</Button>
                  </NavLink>
                  <NavLink to="/login">
                    <Button variant="light">Login</Button>
                  </NavLink>
                </>
              )}
            </nav>
          </Box>
        </Box>
      </Header>
    </AppShell>
  );
}

export default NavBar;
