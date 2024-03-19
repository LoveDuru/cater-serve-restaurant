import React from "react";
import "./Service.css";

function Services({ title, desc, more, img }) {
  return (
    <div className="service-col">
      <div className="underlay-background"></div>

      <div className="service-icon">{img}</div>
      <h3 className="serviceCol-title">{title}</h3>
      <p>{desc}</p>
      <button className="btn" type="button">
        {more}
      </button>
    </div>
  );
}

export default Services;
