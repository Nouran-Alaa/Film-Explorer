import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";

const LayoutPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default LayoutPage;
