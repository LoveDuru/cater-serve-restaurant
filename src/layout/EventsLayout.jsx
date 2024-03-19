import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Outlet } from "react-router-dom";

function EventsLayout() {
  const scrollPosition = window.scrollY;
  console.log("Scroll position:", scrollPosition);
  return (
    <div>
      <div className="banner">
        <h2>Events</h2>
      </div>
      <main>
        <Outlet />
      </main>
      <FaArrowUp className="scrollupbutton" />
    </div>
  );
}

export default EventsLayout;
