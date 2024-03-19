import React from "react";

function Category({ categories, filterItems, activeTab }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        console.log(index);
        console.log(activeTab);

        return (
          <button
            className={` ${
              activeTab === index ? "cat-btn active " : "cat-btn"
            }`}
            onClick={() => filterItems(category, index)}
            key={index}
          >
            {console.log(activeTab)}
            {console.log(index)}

            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
