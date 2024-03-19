import React from "react";

function Sidebar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <NavLink to="home">
            Cater<span>Serv</span>
          </NavLink>
        </div>
        <button className="toggle-btn">
          <FaBars />
        </button>

        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="events">Events</NavLink>
          <NavLink to="menu">Menu</NavLink>
          <NavLink to="pages">Pages</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
        <div className="searchandbook">
          <button className="btn search">b</button>
          <button className="btn">Book Now</button>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
