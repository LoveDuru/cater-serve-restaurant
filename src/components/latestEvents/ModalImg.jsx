import React from "react";
import "./ModalImg.css";
import items from "./data";

function ModalImg(active) {
  // if (Array.isArray(items)) {
  //   // Now you can safely use items.map(...)
  // } else {
  //   console.error("items is not an array");
  // }

  return (
    <div>
      <div className="slider">
        {items.map((eventItem) => {
          const { img, id } = eventItem;
          return (
            <div
              className={`slide ${active ? "active" : ""}`}
              key={id}
              active={active ? active : undefined}
            >
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModalImg;
