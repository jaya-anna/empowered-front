import React from "react";
import { NavLink } from "react-router-dom";
import { IconBrandInstagram } from "@tabler/icons-react";
function Footer() {
  return (
    <section className="section-footer">
      <div className="container-footer">
        <p style={{lineHeight:"2"}}>
          © 2023 feel empowered. All Rights Reserved. Made with ♡ by Leila &
          Anna & Diana <br></br>
          <span style={{marginTop:"30px", fontSize:"13px"}}>| only Love - no Hate</span>
        </p>

        <div className="positioning-about-follow">
          <div>
            <NavLink
              style={{ fontSize: "14px" }}
              className="footer-about-follow"
              to="/about"
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              style={{ fontSize: "14px" }}
              className="footer-about-follow"
              to="https://www.instagram.com/empoweredemp/"
            >
              Follow us
            </NavLink>
            <IconBrandInstagram
              style={{ marginLeft: "10px", height: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
