import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function OutletComponent() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default OutletComponent;
