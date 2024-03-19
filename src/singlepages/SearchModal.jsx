import React, { useEffect } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

function SearchModal({ isSearchPageOpen, closeSearchPage }) {
  useEffect(() => {
    if (isSearchPageOpen) {
      // Hide scroll bar when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll bar when the modal is closed
      document.body.style.overflow = "";
    }
    // Cleanup function to remove event listener
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchPageOpen]);
  return (
    <div
      className={isSearchPageOpen ? "modalsearchPage show" : "modalsearchPage"}
    >
      <div className="bar">
        <p>Search by keyword</p> <FaTimes onClick={closeSearchPage} />
      </div>
      <div className="searchmodalinputcontainer">
        <div className="inputcontainer">
          <input type="text" placeholder="keywords" />
          <button>
            <FaSearch className="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
