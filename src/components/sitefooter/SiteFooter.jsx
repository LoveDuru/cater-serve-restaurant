import React from "react";
import "./SiteFooter.css";
import menuone from "../../assets/img/menu-01.jpg";
import menutwo from "../../assets/img/menu-02.jpg";
import menuthree from "../../assets/img/menu-03.jpg";
import menufour from "../../assets/img/menu-04.jpg";
import menufive from "../../assets/img/menu-05.jpg";
import menusix from "../../assets/img/menu-06.jpg";
import {
  FaCheck,
  FaClock,
  FaFacebookF,
  FaHouzz,
  FaInstagram,
  FaLinkedinIn,
  FaMailchimp,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

function SiteFooter() {
  return (
    <div className="sitefooter">
      <div className="row">
        <div className="footer-col ">
          <h4 className="title">
            <span>Cater</span>
            Serve
          </h4>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              voluptatem excepturi perspiciatis vitae adipisci molestias, ea est
            </p>
            <div className="footersocialcontainer">
              <a className="footersocialbox">
                <FaFacebookF className="footermediaIcons" />
              </a>
              <a className="footersocialbox">
                <FaTwitter className="footermediaIcons" />
              </a>
              <a className="footersocialbox">
                <FaInstagram className="footermediaIcons" />
              </a>
              <a className="footersocialbox">
                <FaLinkedinIn className="footermediaIcons" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <h4>special facilities</h4>
          <ul className="menu">
            <li>
              <FaCheck className="footericon" />
              Cheese Burger
            </li>
            <li>
              <FaCheck className="footericon" />
              Sandwich
            </li>
            <li>
              <FaCheck className="footericon" />
              Panner Burger
            </li>
            <li>
              <FaCheck className="footericon" />
              Special Sweets
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li>
              <FaHouzz className="footericon" /> 123 Street, New York, USA
            </li>
            <li>
              <FaPhone className="footericon" /> (+012) 3456 7890 123
            </li>
            <li>
              <FaMailchimp className="footericon" />
              info@example.com
            </li>
            <li>
              <FaClock className="footericon" /> 26/7 Hours Service
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Social Gallery</h4>
          <div className="gallery">
            <img src={menuone} alt="" />
            <img src={menutwo} alt="" />
            <img src={menuthree} alt="" />
            <br />
            <img src={menufour} alt="" />
            <img src={menufive} alt="" />
            <img src={menusix} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;
