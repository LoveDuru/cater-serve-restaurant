import React from "react";
import { Outlet } from "react-router-dom";

function OurTeamLayout() {
  return (
    <div>
      <div className="banner">
        <h2>Our Team</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default OurTeamLayout;
