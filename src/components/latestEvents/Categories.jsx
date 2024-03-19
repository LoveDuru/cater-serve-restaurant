import React from "react";
import "./Categories.css";

function Categories({ categories, filterItems, activeTab }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className={` ${
              activeTab === index ? "cat-btn active " : "cat-btn"
            }`}
            onClick={() => filterItems(category, index)}
            key={index}
          >
            {console.log(category)}
            {console.log(activeTab)}
            {console.log(index)}
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;

// <button className="cat-btn" onClick={() => filterItems("All")}>
//   All Events
// </button>
// <button className="cat-btn" onClick={() => filterItems("Wedding")}>
//   Wedding
// </button>
// <button className="cat-btn" onClick={() => filterItems("Coporate")}>
//   Coporate
// </button>
// <button className="cat-btn" onClick={() => filterItems("Buffet")}>
//   Buffet
// </button>
// <button className="cat-btn" onClick={() => filterItems("Cocktail")}>
//   Cocktail
// </button>
