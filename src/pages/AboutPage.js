import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import Banner from "../components/Banner";
import aboutImg2 from "../assets/hol.png";
import aboutImg3 from "../assets/b2s.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <main className=" bg-gray-50 bg-opacity-50">
      <PageHero title="about" />
      <Wrapper className=" section section-center page-100">
        <div>
          <h1
            className="text-xl sm:text-2xl text-black md:text-3xl lg:text-5xl font-black mb-5 bannerText capitalize"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            Don't get caught with fake sneakers
          </h1>
          <h1
            className="text-xl sm:text-2xl md:text-3xl text-black lg:text-5xl font-black text-left lg:text-center bannerText capitalize"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <span className="text-red-900">HorlarOfLagos</span> is everywhere !
            &#128514;
          </h1>
        </div>
        <div className="lg:grid grid-cols-2 gap-5 mt-8">
          <div
            className="mb-3 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img src={aboutImg2} alt="HorlarOfLagos" />
          </div>
          <article data-aos="fade-left" data-aos-duration="3000">
            <div className="mb-5">
              <div className="title">
                <h2 className="text-sm bannerText font-semibold">About Us</h2>
              </div>
              <p className="bannerText">
                At Ultra Sneakers, we are dedicated to bringing you the best in
                authentic, high-quality sneakers. Founded by passionate sneaker
                enthusiasts, we’ve made it our mission to provide footwear that
                not only keeps you stylish but also ensures comfort and
                durability. Whether you’re looking for the latest trends or
                timeless classics, our carefully curated collection is designed
                to meet the needs of every sneaker lover. We believe in
                fostering a community where individuality and quality come
                together, and we’re here to help you step confidently into your
                style.
              </p>
            </div>
            <div className="mb-5">
              <div className="title">
                <h2 className="text-sm bannerText font-semibold">
                  Our Mission
                </h2>
              </div>
              <p className="bannerText">
                Our mission is to provide customers with high-quality sneakers
                that combine comfort, style, and durability. We believe that
                everyone deserves to own footwear that reflects their
                personality and enhances their confidence.
              </p>
            </div>
            <div className="mb-5">
              <div className="title">
                <h2 className="text-sm bannerText font-semibold">Our Vision</h2>
              </div>
              <p className="bannerText">
                Our vision is to become a global leader in sneaker retail,
                offering a diverse range of footwear that sets trends and
                inspires individuality.
              </p>
            </div>
          </article>
        </div>
      </Wrapper>
      <Banner />
      <Wrapper className=" pb-20 section-center">
        <div className="lg:grid grid-cols-2 gap-5 mt-8">
          <div
            className="mb-3 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img src={aboutImg3} alt="HorlarOfLagos" />
          </div>
          <article data-aos="fade-left" data-aos-duration="3000">
            <div className="mb-5">
              <div className="title">
                <h2 className="text-xl md:text-3xl lg:text-4xl bannerText font-bold">
                  It's{" "}
                  <span className="text-green-900 font-black">
                    BACK TO SCHOOL
                  </span>{" "}
                  Szn 🎉
                </h2>
              </div>
              <p className="bannerText">
                At Ultra Sneakers, sneakers represent far more than just
                footwear—they symbolize culture, creativity, and individuality.
                Our store was founded on a deep appreciation for sneaker
                culture, and we are committed to bringing that passion to our
                customers by providing a top-tier selection of the latest
                releases, limited-edition drops, and timeless classics. We
                understand the thrill of finding the perfect pair, which is why
                we stay ahead of the curve, continuously sourcing the freshest,
                most sought-after styles from trusted brands and suppliers.
                Whether you're hunting for a rare collector's item or the latest
                trend to hit the streets, our collection offers something for
                every sneaker enthusiast.
              </p>
            </div>
            <div className="mb-10">
              <p className="bannerText">
                We don’t just sell sneakers; we offer an experience. By
                prioritizing authenticity and quality, we ensure that every pair
                in our inventory meets the highest standards of craftsmanship
                and style, so you can shop with confidence. Our commitment goes
                beyond just offering shoes; we strive to create a community of
                sneaker lovers who value both style and substance. With new
                arrivals constantly dropping,
              </p>
            </div>

            <div className="mb-5">
              <div className="title">
                <h2 className="text-sm bannerText font-semibold">
                  Get familiar with the community
                </h2>
              </div>
              <p className="bannerText text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
                Is my sneaker <span className="text-red-900">fake</span> ?
              </p>
              <p className="bannerText text-center md:text-right text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                HorlarOfLagos !!!!
              </p>
            </div>
          </article>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  p {
    line-height: 2;
    color: #000;
    // max-width: 45em;
    // margin: 0 auto;
    // margin-top: 0.2rem;
  }
  .title {
    text-align: left;
    color: #000;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
