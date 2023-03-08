import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { AppShell, Navbar, Header } from "@mantine/core";

function OutletComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default OutletComponent;
