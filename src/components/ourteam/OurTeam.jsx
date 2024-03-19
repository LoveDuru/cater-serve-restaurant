import React from "react";
import {
  FaCheck,
  FaClock,
  FaFacebookF,
  FaHouzz,
  FaInstagram,
  FaLinkedinIn,
  FaMailchimp,
  FaPhone,
  FaShare,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import "./OurTeam.css";
import chefOne from "../../assets/img/team-1.jpg";
import chefTwo from "../../assets/img/team-2.jpg";
import chefThree from "../../assets/img/team-3.jpg";
import chefFour from "../../assets/img/team-4.jpg";

function OurTeam() {
  return (
    <div className="ourteam">
      <h4 className="section-title">Our Team</h4>
      <h2 className="mainsection-header">We have experienced chef team</h2>
      <div className="ourteam-row">
        <div className="ourteam-col">
          <div className="teamsocialiconcontainer">
            <a className="teamsocialbox">
              <FaShareAlt className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaTwitter className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaInstagram className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaLinkedinIn className="teammediaIcons" />
            </a>
          </div>

          <img src={chefOne} alt="" />
          <div className="chefdetails">
            <h3>Henry</h3>
            <p>Decoration Chef</p>
          </div>
        </div>

        <div className="ourteam-col">
          <div className="teamsocialiconcontainer">
            <a className="teamsocialbox">
              <FaShareAlt className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaTwitter className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaInstagram className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaLinkedinIn className="teammediaIcons" />
            </a>
          </div>
          <img src={chefTwo} alt="" />
          <div className="chefdetails">
            <h3>James Born</h3>
            <p>Executive Chef</p>
          </div>
        </div>

        <div className="ourteam-col">
          <div className="teamsocialiconcontainer">
            <a className="teamsocialbox">
              <FaShareAlt className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaTwitter className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaInstagram className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaLinkedinIn className="teammediaIcons" />
            </a>
          </div>
          <img src={chefThree} alt="" />
          <div className="chefdetails">
            <h3>Hillary Martin</h3>
            <p>Kitchen Chef</p>
          </div>
        </div>

        <div className="ourteam-col">
          <div className="teamsocialiconcontainer">
            <a className="teamsocialbox">
              <FaShareAlt className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaTwitter className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaInstagram className="teammediaIcons" />
            </a>
            <a className="teamsocialbox">
              <FaLinkedinIn className="teammediaIcons" />
            </a>
          </div>
          <img src={chefFour} alt="" />
          <div className="chefdetails">
            <h3>Adam Smith</h3>
            <p>Head Chef</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
