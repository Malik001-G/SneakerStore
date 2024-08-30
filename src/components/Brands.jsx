import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg2 from "../assets/hero-img.png";
import img1 from "../assets/brand1.png";
import img2 from "../assets/brand2.png";
import img3 from "../assets/brand3.png";
import img4 from "../assets/brand4.png";
import img5 from "../assets/brand5.png";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";

const Brands = () => {
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
    <Wrapper className="section-brand"   data-aos="fade-left"
    data-aos-duration="3000">
      <div className="section-center">
        <div className="grid grid-cols-5 gap-5">
          <div class="flex justify-center">
            <img src={img2} class="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-24 object-contain" alt="" />
          </div>
          <div class="flex justify-center">
            <img src={img3} class="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-24 object-contain" alt="" />
          </div>
          <div class="flex justify-center">
            <img src={img1} class="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-24 object-contain" alt="" />
          </div>
          <div class="flex justify-center">
            <img src={img4} class="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-24 object-contain" alt="" />
          </div>
          <div class="flex justify-center">
            <img src={img5} class="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-24 object-contain" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: white;
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

export default Brands;
