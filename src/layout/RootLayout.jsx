import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import GototopArrow from "../singlepages/GototopArrow";
import SearchModal from "../singlepages/SearchModal";

function RootLayout() {
  return (
    <div>
      <SearchModal />
      <Navbar />

      <main>
        <Outlet />
        <GototopArrow />
      </main>
    </div>
  );
}

export default RootLayout;
