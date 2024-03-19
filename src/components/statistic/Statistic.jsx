import React from "react";
import "./Statistic.css";
import statsimg from "../../assets/img/fact.jpg";
import { FaCheck, FaPlay, FaUsers, FaUserCog } from "react-icons/fa";

function Statistic() {
  return (
    <div className="statistics">
      <div className="stats-row">
        <div className="stats-data">
          <div className="stats-info">
            <FaUsers className="stats-fa" />
            <h1>689</h1>
            <p>Happy Customers</p>
          </div>
          <div className="stats-info">
            <FaUserCog className="stats-fa" />
            <h1>107</h1>
            <p>Expert Chef</p>
          </div>
          <div className="stats-info">
            <FaCheck className="stats-fa" />
            <h1>253</h1>
            <p>Event Completed</p>
          </div>
        </div>
        <div className="stats-video">
          <img src={statsimg} alt="" />
          <button>
            <FaPlay className="stats-video-play" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
