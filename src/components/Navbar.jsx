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
              home
            </NavLink>

            <NavLink className="navbar-comp-style" to="/resources">
              resources
            </NavLink>
            <NavLink className="navbar-comp-style" to="/info">
              info
            </NavLink>
            <NavLink className="navbar-comp-style" to="/about">
              about
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
              quiz
            </NavLink>


            {isAuthenticated ? (
              <>
                <NavLink className="navbar-comp-style" to="/forum">
                  forum
                </NavLink>

                <NavLink className="navbar-comp-style" to="/profile">
                  profile
                </NavLink>

                <NavLink
                  className="navbar-comp-style"
                  to="/"
                  onClick={handleLogout}
                >
                  logout
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
                  sign up
                </NavLink>
                <NavLink className="navbar-comp-style" to="/login">
                  login
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
