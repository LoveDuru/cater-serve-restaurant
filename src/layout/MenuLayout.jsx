import React from "react";
import { Outlet } from "react-router-dom";

function MenuLayout() {
  return (
    <div>
      <div className="banner">
        <h2>Menu</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MenuLayout;
