import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg2 from "../assets/hero-img.png";
import img1 from "../assets/banner1.png";
import img2 from "../assets/banner3.png";
import img3 from "../assets/bannerrrr.jpg";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
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
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  return (
    <Wrapper className="section">
      <div style={backgroundContainerStyle}>
        <div style={gradientOverlayStyle}></div>
        <div style={contentStyle}>
          <h1 className="text-white font-black mb-2 bannerText text-8xl uppercase">
            Own The Floor
          </h1>
          <div className="flex justify-center">
            <p className="max-w-xl text-white bannerText text-lg font-medium ">
              Step into footwear that sets you apart. With a perfect balance of
              style and comfort, our collection is curated to keep you moving in
              confidence. Find your fit and make every step count.
            </p>
          </div>
          <div class="flex justify-center">
            <Link
              to="/products"
              data-aos="fade-up"
              data-aos-duration="3000"
              className="button font-medium bannerText border-2 rounded-sm transition-all ease-linear duration-500"
              id="button-5"
            >
              <div id="translate"></div>
              <span className="text-white">SHOP NOW</span>
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
