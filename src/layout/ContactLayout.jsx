import React from "react";
import "./ContactUs.css";

import Footer from "../components/footer/Footer";
import SiteFooter from "../components/sitefooter/SiteFooter";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

function ContactLayout() {
  return (
    <div>
      <div className="banner">
        <h2>Contact Us</h2>
      </div>
      <div className="contactsection">
        <div className="contactformcontainer">
          <h4 className="section-title">Get In Touch</h4>
          <h1>Contact Us For Any Queries! </h1>
          <div className="contactusrow">
            <form action="" className="contactform">
              <input type="text" placeholder="Your Name" />
              <input type="email" name="" id="" placeholder="Your Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                placeholder="Your Message"
              ></textarea>
              <button className="btn" type="submit">
                Submit Now
              </button>
            </form>

            <div className="details">
              <div className="detailcol">
                <FaMapMarker className="contact-fa" />
                <div className="info">
                  <h4>Address</h4>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>

              <div className="detailcol">
                <FaEnvelope className="contact-fa" />
                <div className="info">
                  <h4>Mail Us</h4>
                  <p>info@example.com</p>
                  <p>support@example.com</p>
                </div>
              </div>

              <div className="detailcol">
                <FaPhone className="contact-fa" />
                <div className="info">
                  <h4>Telephone</h4>
                  <p>(+012) 3456 7890 123</p>
                  <p>(+704) 5555 0127 296</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
      <Footer />
    </div>
  );
}

export default ContactLayout;
