import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Image, Box, Button, Header, Text } from "@mantine/core";
import { SessionContext } from "../contexts/SessionContext";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";

function NavBar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("holder");
    setIsAuthenticated(false);
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
          <div>
            <Image
              width={130}
              className="style-logo"
              src="../../images/logo-purple.png"
              alt="logo empowered"
            ></Image>
          </div>


          <div>
            <br></br>
            <NavLink className="navbar-comp-style" to="/forum">
              forum
            </NavLink>
            <NavLink className="navbar-comp-style" to="/faq">
              FAQ
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink className="navbar-comp-style" to="/profile">
                  profile
                </NavLink>

<NavLink>
                <button to="/" onClick={handleLogout}>
                  logout
                </button>
</NavLink>

                <IconBrandInstagram
                  style={{
                    marginTop: "20px",
                    marginLeft: "80px",
                    height: "20px",
                  }}
                ></IconBrandInstagram>
                <IconMail
                  style={{
                    marginTop: "20px",
                    marginLeft: "10px",
                    height: "20px",
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
                <IconBrandInstagram
                  style={{
                    marginTop: "20px",
                    marginLeft: "80px",
                    height: "20px",
                  }}
                ></IconBrandInstagram>
                <IconMail
                  style={{
                    marginTop: "20px",
                    marginLeft: "10px",
                    height: "20px",
                  }}
                ></IconMail>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
