import React from "react";
import { Outlet } from "react-router-dom";

function OurBlogLayout() {
  return (
    <div>
      <div className="banner">
        <h2>Our Blog</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default OurBlogLayout;
