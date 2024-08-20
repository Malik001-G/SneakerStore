import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import ImageGallery from "../components/ImageGallery";
import Banner from "../components/Banner";
import Brands from "../components/Brands";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <FeaturedProducts />
      <Services />
      <Banner />
      <ImageGallery />
      <Contact />
    </main>
  );
};

export default HomePage;
