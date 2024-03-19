import React from "react";
import "./BookUs.css";

function BookUs() {
  return (
    <div className="bookus-container">
      <div className="bookus-banner">
        <form action="" className="form">
          <h4 className="section-title">Book Us</h4>
          <h2 className="mainsection-header">where you want our services</h2>
          <div className="fields-container">
            <select name="select" id="">
              <option value="">Select Country</option>
              <option value="">USA</option>
              <option value="">UK</option>
              <option value="">NIGERIA</option>
            </select>
            <select name="select" id="">
              <option value="">Select City</option>
              <option value="">Depend on Country</option>
              <option value="">UK</option>
              <option value="">USE</option>
            </select>
            <select name="select" id="">
              <option value="">Select Palace</option>
              <option value="">Small Event</option>
              <option value="">Big Event</option>
              <option value="">Average Event</option>
            </select>
            <select name="select" id="">
              <option value="">Event Type</option>
              <option value="">Small Event</option>
              <option value="">Big Event</option>
              <option value="">Average Event</option>
            </select>
            <select name="select" id="">
              <option value="">No of Palace</option>
              <option value="">100-200</option>
              <option value="">300-600</option>
              <option value="">600-700</option>
              <option value="">700-1000</option>
            </select>
            <select name="select" id="">
              <option value="">Vegetarian</option>
              <option value="">Vegetarian</option>
              <option value="">None Vegetarian</option>
              <option value="">Average Event</option>
            </select>
            <input
              type="number"
              name="number"
              id=""
              placeholder="Your Contact No"
            />

            <input type="date" name="date" id="" />
            <input type="email" name="email" id="" placeholder="email" />
          </div>

          <button className="btn" type="submit">
            {" "}
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookUs;
