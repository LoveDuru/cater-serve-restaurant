import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
// import About from "./pages/About";
import Home from "./home/Home";
import AboutLayout from "./layout/AboutLayout";
import AboutPage from "./thepages/AboutPage";
import ServiceLayout from "./layout/ServiceLayout";
import ServicesPage from "./thepages/ServicesPage";
import ContactLayout from "./layout/ContactLayout";
import MenuLayout from "./layout/MenuLayout";
import MenuPage from "./thepages/MenuPage";
import EventsLayout from "./layout/EventsLayout";
import EventsPage from "./thepages/EventsPage";
import NotFound from "./singlepages/NotFound";
import Bookings from "./thepages/Bookings";
import BookingLayout from "./layout/BookingLayout";
// import OurBlog from "./components/ourblog/OurBlog";
import OurBlogLayout from "./layout/OurBlogLayout";
import BlogPage from "./thepages/BlogPage";
import OurTeamLayout from "./layout/OurTeamLayout";
import TeamPage from "./thepages/TeamPage";
import TestimonialLayout from "./layout/TestimonialLayout";
// import GototopArrow from "./components/GototopArrow";
import Testimonial from "./thepages/Testimonial";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />

      <Route path="about" element={<AboutLayout />}>
        <Route index element={<AboutPage />} />
      </Route>

      <Route path="services" element={<ServiceLayout />}>
        <Route index element={<ServicesPage />} />
      </Route>

      <Route path="events" element={<EventsLayout />}>
        <Route index element={<EventsPage />} />
      </Route>
      <Route path="menu" element={<MenuLayout />}>
        <Route index element={<MenuPage />} />
      </Route>

      <Route path="contact" element={<ContactLayout />} />

      <Route path="booking" element={<BookingLayout />}>
        <Route index element={<Bookings />} />
      </Route>
      <Route path="Ourblog" element={<OurBlogLayout />}>
        <Route index element={<BlogPage />} />
      </Route>
      <Route path="ourteam" element={<OurTeamLayout />}>
        <Route index element={<TeamPage />} />
      </Route>
      <Route path="testimonial" element={<TestimonialLayout />}>
        <Route index element={<Testimonial />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
