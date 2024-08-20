import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroBcg2 from "../assets/hero-img.png";
import img1 from "../assets/banner1.png";
import img2 from "../assets/banner3.png";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
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

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="section-center pt-10">
        <div className="grid grid-cols-3">
          <div className="flex items-center col-span-2">
            <h1 className="text-8xl font-black text-black uppercase bannerText" data-aos="fade-left" data-aos-duration="3000">
              Beyond <span className="text-red-900">Footwear</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <img src={img1} alt="" data-aos="flip-right" data-aos-duration="3000" />
          </div>
          <div className="flex justify-center">
            <img src={img2} alt="" data-aos="flip-left" data-aos-duration="3000" />
          </div>
          <div className="flex items-center col-span-2">
            <div className="w-full">
              <h1 className="text-8xl text-center font-black text-black uppercase bannerText"data-aos="fade-right" data-aos-duration="3000">
                It is a
              </h1>
              <p className="text-8xl text-right font-black text-green-900 uppercase bannerText"data-aos="fade-up" data-aos-duration="3000">
                Lifestyle..
              </p>
            </div>
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

export default Banner;
