import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img3 from "../assets/bannerrrr.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const backgroundContainerStyle = {
    position: "relative",
    height: "60vh",
    width: "100vw",
    backgroundImage: `url(${img3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const gradientOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)",
    zIndex: 1,
  };
  const contentStyle = {
    position: "relative",
    zIndex: 2,
    color: "white",
    textAlign: "center",
  };
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Wrapper className="section">
      <div style={backgroundContainerStyle}>
        <div style={gradientOverlayStyle}></div>
        <div style={contentStyle}>
          <h1 className="text-white font-black mb-2 bannerText text-4xl md:text-5xl xl:text-8xl uppercase">
            Own The Floor
          </h1>
          <div className="flex justify-center">
            <p className="max-w-md md:max-w-xl text-white bannerText text-sm md:text-md px-4 md:px-2 lg:px-0 lg:text-lg font-medium ">
              Step into footwear that sets you apart. With a perfect balance of
              style and comfort, our collection is curated to keep you moving in
              confidence. Find your fit and make every step count.
            </p>
          </div>
          <div class="flex justify-center mt-8">
            <Link
              to="/products"
              className="text-gray-200 outline-none bg-red-900 hover:shadow-2xl shadow-white transition-all ease-linear duration-700  font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              id="button-5"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Banner;
