import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2> Page Not Found</h2>
      <p>
        We’re sorry, the page you have looked for does not exist in our website!
        Maybe go to our <NavLink to="/">home page</NavLink> or try to use a
        search?
      </p>
    </div>
  );
}

export default NotFound;
