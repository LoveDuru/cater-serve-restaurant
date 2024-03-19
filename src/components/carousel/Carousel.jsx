import React, { useEffect, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import reviewDetails from "./reviewdetails";

function Carousel() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    let lastIndex = reviewDetails.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="testimonial-section">
      <h4 className="section-title">Testimonials</h4>

      <h1 className="mainsection-header">What Our Customers Said</h1>

      <div className=" section-center">
        {reviewDetails.map((detail, personIndex) => {
          const { id, img, name, profession, review } = detail;

          let position = "farSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === reviewDetails.length - 1)
          ) {
            position = "lastSlide";
          }
          if (
            personIndex === index + 1 ||
            (index === reviewDetails.length - 1 && personIndex === 0)
          ) {
            position = "nextSlide";
          }

          return (
            <div className={`testimonial-col ${position}`} key={id}>
              <div className="reviewer-details">
                <FaQuoteRight className="testimonial-quote" />
                <img src={img} alt="" />{" "}
                <div className="personinfo">
                  <h3>{name}</h3> <p>{profession}</p>
                </div>
              </div>

              <div className="review-icons">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="review-desc">{review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
