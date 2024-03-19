import React from "react";
import { Outlet } from "react-router-dom";

function BookingLayout() {
  return (
    <div>
      <div className="banner">
        <h2>Book Us</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default BookingLayout;
