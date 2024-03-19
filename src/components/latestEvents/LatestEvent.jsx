import React from "react";
import { useState } from "react";
import "./LatestEvent.css";
import Categories from "./Categories";
import Events from "./Events";
import items from "./data";

const allCategories = [
  "All Events",
  ...new Set(items.map((item) => item.category)),
];

function LatestEvent() {
  const [eventItems, setEventItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  console.log(categories, "abb");

  const filterItems = (category, index) => {
    if (category === "All Events") {
      setEventItems(items);
      setActiveTab(0);

      return;
    }

    const newItems = items.filter((item) => item.category === category);

    setActiveTab(index);
    setEventItems(newItems);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="latestevent">
      <h4 className="section-title"> LATEST EVENT</h4>
      <h2 className="mainsection-header">
        Our Social & Professional Events Gallery
      </h2>
      <Categories
        filterItems={filterItems}
        categories={categories}
        activeTab={activeTab}
      />

      <Events
        items={eventItems}
        selectedImage={selectedImage}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div>
  );
}

export default LatestEvent;
