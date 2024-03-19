import React, { useEffect, useState } from "react";
import Menu from "./Menu";
// import Category from "./Category";
import items from "./menudata";
import "./OurMenu.css";
import Category from "./Category";

// console.log(menuCategories);
const menuCategories = [...new Set(items.map((item) => item.category))];
function OurMenu() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(menuCategories);
  const [activeTab, setActiveTab] = useState(0);
  // console.log(categories);

  useEffect(() => {
    const newItems = items.filter((item) => item.category === "Stater");
    setMenu(newItems);
    // console.log(newItems);
  }, []);

  const filterItems = (cat, index) => {
    const newItems = items.filter((item) => item.category === cat);
    setMenu(newItems);
    setActiveTab(index);
  };
  return (
    <div className="ourmenu-section">
      <h4 className="section-title">Our Menu</h4>
      <h2 className="mainsection-header">Most Popular Food in the World</h2>
      <Category
        categories={categories}
        filterItems={filterItems}
        activeTab={activeTab}
      />
      <Menu menu={menu} />
    </div>
  );
}

export default OurMenu;
