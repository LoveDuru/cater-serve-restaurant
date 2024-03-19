import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function GototopArrow() {
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const [isScroll, setIsScroll] = useState(undefined);
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsArrowVisible(true);
    } else {
      setIsArrowVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        isArrowVisible ? "gototoparrowcontainer show" : "gototoparrowcontainer"
      }
    >
      <FaArrowUp onClick={scrolltoTop} className="gototopArrow " />
    </div>
  );
}

export default GototopArrow;
