import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { AppShell, Navbar, Header } from '@mantine/core';

function OutletComponent() {
  return (
    <AppShell
      padding="md"
      
    >
      <NavBar />
      <Outlet />
      <Footer />
    </AppShell>
  );
}

export default OutletComponent;
