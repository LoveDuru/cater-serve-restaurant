import React from "react";
import "./Home.css";

import Header from "../components/header/Header";
import About from "../components/about/About";
import OurService from "../components/ourservice/OurService";
import Statistic from "../components/statistic/Statistic";
import OurTeam from "../components/ourteam/OurTeam";
import BookUs from "../components/bookus/BookUs";
import OurBlog from "../components/ourblog/OurBlog";
import Footer from "../components/footer/Footer";
import SiteFooter from "../components/sitefooter/SiteFooter";
import OurMenu from "../components/menu/OurMenu";
import LatestEvent from "../components/latestEvents/LatestEvent";
import Carousel from "../components/carousel/Carousel";
import GototopArrow from "../singlepages/GototopArrow";

function Home() {
  const scrollPosition = window.scrollY;
  console.log("Scroll position:", scrollPosition);

  // window.addEventListener("scroll", scrollPosition);
  return (
    <div className="home">
      <Header />
      <About />
      <Statistic />
      <OurService />
      <LatestEvent />
      <OurMenu />
      <BookUs />
      <OurTeam />
      <Carousel />
      <OurBlog />
      <SiteFooter />
      <Footer />
      <GototopArrow />
    </div>
  );
}
// import LatestEvent from "../pages/latestEvents/LatestEvent";

export default Home;
