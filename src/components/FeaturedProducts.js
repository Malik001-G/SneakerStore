import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import heroBcg2 from "../assets/hero-img.png";
import img1 from "../assets/gallery-center.jpg";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProducts = () => {
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
    <Wrapper className="section" data-aos="fade-up" data-aos-duration="2000">
      <div className="section-center">
        <div className="sm:flex justify-between items-center mb-5 sm:mb-0">
          <div className="text-left uppercase font-extrabold mb-5">
            <h2 className="uppercase bannerText text-black">
              <span class="text-red-900">Trending</span> Kicks
            </h2>
          </div>
          <div className="flex justify-end">
            <Link
              to="/products"
              className="capitalize font-semibold flex gap-2 text-black items-center"
            >
              all products <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {featured.slice(0, 4).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
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

export default FeaturedProducts;
