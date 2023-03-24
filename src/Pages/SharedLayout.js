import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default SharedLayout;
