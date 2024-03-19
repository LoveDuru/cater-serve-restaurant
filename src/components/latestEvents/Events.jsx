import React from "react";
import "./Events.css";
import { FaSearch, FaSearchPlus, FaTimes } from "react-icons/fa";
function Events({ items, openModal, closeModal, selectedImage }) {
  return (
    <div className="events">
      {items.map((eventItem) => {
        const { id, category, img } = eventItem;
        return (
          <div key={id} className="image-list">
            <img src={img} alt="" className="img-col" />

            <div className="overlay">
              <h4>{category}</h4>
              <div className="btn-container">
                <button onClick={() => openModal(img)}>
                  <FaSearchPlus className="events-searchicon" />
                </button>
              </div>
            </div>
            <div></div>
          </div>
        );
      })}
      {selectedImage && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={selectedImage} alt="" />
            <button onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
