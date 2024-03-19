import React from "react";
import "./Header.css";
import headerimg from "../../assets/img/hero.png";

function Header() {
  return (
    <div className="header">
      <div className="header-row">
        <div className="header-text">
          <h4>WELCOME TO CATERSERV</h4>
          <h1 className="mainsection-header">
            Book <span className="mainsection-header">cater</span> serve for
            your dream events
          </h1>
          <div className="header-btn-container">
            <button className="btn" type="button">
              Book now
            </button>
            <button className="btn" type="button">
              Know more
            </button>
          </div>
        </div>
        <div className="header-img">
          <img src={headerimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
