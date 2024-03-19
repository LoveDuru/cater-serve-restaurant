import React from "react";
import "./Menu.css";

function Menu({ menu }) {
  return (
    <div className="menu-row">
      {menu.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div className="item-col" key={id}>
            <img src={img} alt="" className="menu-drink" />
            <div className="desc">
              <div>
                <h3>{title}</h3>
                <h3 className="price">${price}</h3>
              </div>
              <p className="menu-desc">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
