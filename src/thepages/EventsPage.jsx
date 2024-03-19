import React from "react";
import LatestEvent from "../components/latestEvents/LatestEvent";
import BookUs from "../components/bookus/BookUs";
import SiteFooter from "../components/sitefooter/SiteFooter";
import Footer from "../components/footer/Footer";

function EventsPage() {
  return (
    <div>
      <LatestEvent />
      <BookUs />
      <SiteFooter />
      <Footer />
    </div>
  );
}

export default EventsPage;
