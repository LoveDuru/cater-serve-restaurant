import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import BreadCrumbs from "../../singlepages/BreadCrumbs";
import SearchModal from "../../singlepages/SearchModal";

function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSideBarClose, setIsSideBarClose] = useState(true);
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);
  const [isSearchPageOpen, setIsSearchPageOpen] = useState(false);

  const openSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  // className={isSearchPageOpen ? "searchpage show" : "searchpage"}
  const closeSidebar = () => {
    setIsSideBarClose(false);
  };

  const displayDropdownMenu = () => {
    setIsDropdownMenu(true);
  };
  const removeDropdownMenu = () => {
    setIsDropdownMenu(false);
  };
  const displaySearchPage = () => {
    setIsSearchPageOpen(true);
  };
  const closeSearchPage = () => {
    setIsSearchPageOpen(false);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <NavLink to="home">
            Cater<span>Serv</span>
          </NavLink>
        </div>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars className="navmenu-icon" />
        </button>

        <div className={`${isSideBarOpen ? "links show" : "links"}`}>
          <NavLink onClick={openSidebar} to="/">
            Home
          </NavLink>
          <NavLink onClick={openSidebar} to="about">
            About
          </NavLink>
          <NavLink onClick={openSidebar} to="services">
            Services
          </NavLink>
          <NavLink onClick={openSidebar} to="events">
            Events
          </NavLink>
          <NavLink onClick={openSidebar} to="menu">
            Menu
          </NavLink>
          <NavLink
            to="#"
            className="pages"
            onMouseOver={displayDropdownMenu}
            onMouseLeave={removeDropdownMenu}
          >
            <a>Pages</a>
            <div
              className={`${
                isDropdownMenu ? "dropdown-menu show" : "dropdown-menu"
              }`}
            >
              <NavLink onClick={openSidebar} to="booking">
                Booking
              </NavLink>
              <NavLink onClick={openSidebar} to="ourblog">
                Our Blog
              </NavLink>
              <NavLink onClick={openSidebar} to="Ourteam">
                Our Team
              </NavLink>
              <NavLink onClick={openSidebar} to="testimonial">
                Testimonial
              </NavLink>
            </div>
          </NavLink>

          <NavLink onClick={openSidebar} to="contact">
            Contact
          </NavLink>
        </div>
        <div className="searchandbook">
          <button className="btn search" onClick={displaySearchPage}>
            <FaSearch />
          </button>
          <button className="btn">Book Now</button>
        </div>
      </nav>
      <BreadCrumbs />
      <SearchModal
        isSearchPageOpen={isSearchPageOpen}
        closeSearchPage={closeSearchPage}
      />
    </div>
  );
}

export default Navbar;
