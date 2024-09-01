import React, { useEffect } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import svg from "../assets/bg.svg";
import Carousel from "../components/CarouselSlider";
import img1 from "../assets/slider5.png";
import img2 from "../assets/slider1.png";
import img3 from "../assets/slider2.png";
import img4 from "../assets/slider4.png";
import img5 from "../assets/slider6.png";
import img6 from "../assets/slider7.png";

import AOS from "aos";
import "aos/dist/aos.css";

const images = [img1, img2, img3, img4, img5, img6];
const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      className="bg-gray-50"
      style={{
        backgroundImage: `url(${svg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "inherit",
        backgroundPosition: "right bottom",
      }}
    >
      <section className="section-center section md:grid grid-cols-2 gap-10">
        <div>
          <h1
            data-aos="fade-right"
            data-aos-duration="3000"
            className="font-black text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-black bannerText uppercase mb-5"
          >
            Own Your <span className="text-red-900">Style!</span>
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="3000"
            className="text-lg bannerText text-black mb-10"
          >
            Discover a world of comfort and style in our curated collection.
            From casual everyday wear to statement-making kicks, we have the
            perfect pair for every occasion. Experience the perfect blend of
            fashion and function.
          </p>
          <Link
            to="/products"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="button font-medium bannerText rounded-sm transition-all ease-linear duration-500"
            id="button-5"
          >
            <div id="translate"></div>
            <span>SHOP NOW</span>
          </Link>
        </div>
        <Carousel images={images} />
      </section>
    </div>
  );
};



export default Hero;
