import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg2 from "../assets/hero-img.png";
import img1 from "../assets/gallery-center.jpg";
import img2 from "../assets/gallerya.jpg";
import img3 from "../assets/galleryb.jpg";
import img4 from "../assets/galleryc.jpg";
import img5 from "../assets/galleryd.jpg";
import img6 from "../assets/gallerye.jpg";
import img7 from "../assets/galleryf.jpg";
import img8 from "../assets/galleryg.jpg";
import img9 from "../assets/galleryh.jpg";
import img10 from "../assets/galleryi.jpg";
import img11 from "../assets/galleryj.jpg";
import img12 from "../assets/galleryk.jpg";
import img13 from "../assets/galleryl.jpg";
import img14 from "../assets/gallerym.jpg";
import img15 from "../assets/new2.jpg";
import img16 from "../assets/sneakerstore.gif";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageGallery = () => {
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
    <Wrapper className="section" data-aos="fade-up" data-aos-duration="2000">
      <div className="section-center">
        <div className="title max-w-xl mx-auto my-10">
          <h2 className="uppercase bannerText font-extrabold text-black">
            Sneaker Fiesta
          </h2>
          <p className="text-black text-sm lg:text-lg font-normal bannerText">
            Immerse yourself in a world of endless possibilities. Discover a
            curated selection of footwear, ranging from casual everyday styles
            to high-performance athletic kicks. Our collection is a celebration
            of comfort, style, and innovation.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4">
          <div className="zoom">
            <img src={img5} alt="" />
          </div>
          <div className="zoom">
            <img src={img2} alt="" />
          </div>
          <div className="zoom">
            <img src={img3} alt="" />
          </div>
          <div className="zoom">
            <img src={img4} alt="" />
          </div>
          <div className="zoom">
            <img src={img6} alt="" />
          </div>
          <div className="hidden md:block col-span-2 zoom">
            <img src={img15} alt="" />
          </div>
          <div className="zoom">
            <img src={img7} alt="" />
          </div>
          <div className="md:-mt-52 zoom">
            <img src={img8} alt="" />
          </div>
          <div className="hidden md:block col-span-2">
            <img src={img16} alt="" className="hidden lg:block" />
          </div>
          <div className="md:-mt-52 zoom">
            <img src={img13} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
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

export default ImageGallery;
