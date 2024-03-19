import React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <p className="firstpara">
          <FaCopyright className="copyrightfooter" /> Developed by,
          <span> Lovelyn Duru</span>
        </p>
        <p>
          Designed by <span>HTML Codex</span> Distributed By ThemeWagon
        </p>
      </div>
    </div>
  );
}

export default Footer;
