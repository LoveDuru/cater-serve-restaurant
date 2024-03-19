import React from "react";
import { Outlet } from "react-router-dom";

function TestimonialLayout() {
  return (
    <div>
      <div className="banner">
        <h2>Testimonial</h2>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default TestimonialLayout;
