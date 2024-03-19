import React from "react";
import { Outlet } from "react-router-dom";

function ServiceLayout() {
  return (
    <div>
      <div className="banner">
        <h2>Services</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ServiceLayout;
