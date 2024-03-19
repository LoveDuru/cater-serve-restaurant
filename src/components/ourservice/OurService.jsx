import React from "react";
import Services from "./Services";
import "./OurService.css";
import {
  FaUtensils,
  FaWalking,
  FaWheelchair,
  FaWineGlass,
  FaHamburger,
  FaPizzaSlice,
  FaCheese,
  FaHotdog,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function OurService() {
  return (
    <div className="ourservice">
      <h4 className="section-title">Our services</h4>
      <h2 className="mainsection-header">What we offer</h2>
      <div className="OurService-row">
        <Services
          img={<FaCheese className="fa" />}
          title="Wedding Services"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          more="Read More"
        />
        <Services
          img={<FaPizzaSlice className="fa" />}
          title="Corporate Catering"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           "
          more="Read More"
        />
        <Services
          img={<FaHotdog className="fa" />}
          title="Cocktail Reception"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          more="Read More"
        />
        <Services
          img={<FaHamburger className="fa" />}
          title="Bento Catering"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          more="Read More"
        />
        <Services
          img={<FaWineGlass className="fa" />}
          title="Pub Party"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          more="Read More"
        />
        <Services
          img={<FaWalking className="fa" />}
          title="Home Delivery"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          more="Read More"
        />
        <Services
          img={<FaWheelchair className="fa" />}
          title="Sit-down Catering"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          more="Read More"
        />
        <Services
          img={<FaUtensils className="fa" />}
          title="Buffet Catering"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          more="Read More"
        />
      </div>
    </div>
  );
}

export default OurService;
