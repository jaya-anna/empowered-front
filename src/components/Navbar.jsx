import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Image } from "@mantine/core";
import { SessionContext } from "../contexts/SessionContext";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";

function NavBar() {
  const { isAuthenticated, setIsAuthenticated, setToken, setUser } =
    useContext(SessionContext);

  const handleLogout = () => {
    localStorage.removeItem("bearer");
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
  };

  return (
    <>
      <section className="navbar-section-outer">
        <div className="navbar-section-inner">
          <div>
            <br></br>
            <NavLink className="navbar-comp-style" to="/">
              Home
            </NavLink>

            <NavLink className="navbar-comp-style" to="/resources">
              Resources
            </NavLink>
            <NavLink className="navbar-comp-style" to="/info">
              Info
            </NavLink>
            <NavLink className="navbar-comp-style" to="/about">
              About
            </NavLink>
          </div>
         
            <Image
              width={130}
              className="style-logo"
              src="../../images/logo-purple.png"
              alt="logo empowered"
            ></Image>
         

          <div className="navBar-right">
            <br></br>

            <NavLink className="navbar-comp-style" to="/quiz">
              Quiz
            </NavLink>


            {isAuthenticated ? (
              <>
                <NavLink className="navbar-comp-style" to="/forum">
                  Forum
                </NavLink>

                <NavLink className="navbar-comp-style" to="/profile">
                  Profile
                </NavLink>

                <NavLink
                  className="navbar-comp-style"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>

                <IconBrandInstagram
                  style={{
                    marginTop: "20px",
                    marginLeft: "80px",
                    position: "relative",
                    top: "6px",
                  }}
                ></IconBrandInstagram>
                <IconMail
                  style={{
                    marginTop: "20px",
                    marginLeft: "10px",
                    position: "relative",
                    top: "6px",
                  }}
                ></IconMail>
              </>
            ) : (
              <>
                <NavLink className="navbar-comp-style" to="/signup">
                  Sign up
                </NavLink>
                <NavLink className="navbar-comp-style" to="/login">
                  Login
                </NavLink>

              <a href="https://www.instagram.com/empoweredemp/">
                <IconBrandInstagram
                  style={{
                    marginTop: "20px",
                    marginLeft: "80px",
                    position: "relative",
                    top: "6px",
                  }}
                ></IconBrandInstagram>
              </a> 

              <Link to={"mailto:empowered9876@gmail.com"}>
                <IconMail
                  style={{
                    marginTop: "20px",
                    marginLeft: "80px",
                    position: "relative",
                    top: "6px",
                  }}
                ></IconMail>
              </Link>


              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
