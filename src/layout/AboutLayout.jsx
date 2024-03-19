import React from "react";
// import "./AboutLayout.css";
import { Outlet } from "react-router-dom";

function AboutLayout() {
  return (
    <div>
      <div className="banner">
        <h2>About Us</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AboutLayout;
