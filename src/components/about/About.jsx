import React from "react";
import "./AboutUs.css";
// import aboutimg from "../assets/img/about.jpg";
import aboutimg from "../../assets/img/about.jpg";
import { FaShare, FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <div className="about-row">
        <div className="about-img">
          <img src={aboutimg} alt="" />
        </div>
        <div className="about-desc">
          <h4 className="section-title">About us</h4>
          <h2 className="mainsection-header">
            Trusted by 200+ satisfied clients
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            obcaecati alias eaque dolor facere adipisci exercitationem, quis
            soluta et. Excepturi commodi beatae aperiam id numquam neque
            doloribus eos illo ut sapiente corporis sequi exercitationem, ipsa ?
          </p>
          <div className="about-desc-offer">
            <div>
              <FaShare className="about-fa" />
              Fresh and Fast food Delivery
            </div>
            <div>
              <FaShare className="about-fa" />
              24/7 Customer Support
            </div>
            <div>
              <FaShare className="about-fa" />
              Easy Optimazation Options
            </div>
            <div>
              <FaShare className="about-fa" />
              Delicous Deals for Delicious Meals
            </div>
          </div>
          <button className="btn" type="button">
            About Us <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
