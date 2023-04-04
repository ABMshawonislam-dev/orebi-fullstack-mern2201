import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navabar from "./Navabar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <Navabar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
