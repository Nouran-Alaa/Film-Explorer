import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const LayoutPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default LayoutPage;
