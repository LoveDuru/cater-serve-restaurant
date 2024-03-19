import React from "react";

import Footer from "../components/footer/Footer";
import SiteFooter from "../components/sitefooter/SiteFooter";
import OurMenu from "../components/menu/OurMenu";

function MenuPage() {
  return (
    <div>
      <OurMenu />
      <SiteFooter />
      <Footer />
    </div>
  );
}

export default MenuPage;
