import React from "react";
import About from "../components/about/About";
import OurTeam from "../components/ourteam/OurTeam";
import Statistic from "../components/statistic/Statistic";
import SiteFooter from "../components/sitefooter/SiteFooter";
import Footer from "../components/footer/Footer";

function AboutPage() {
  return (
    <div>
      <About />
      <Statistic />
      <OurTeam />
      <SiteFooter />
      <Footer />
    </div>
  );
}

export default AboutPage;
