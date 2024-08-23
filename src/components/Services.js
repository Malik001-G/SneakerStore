import React, { useEffect } from "react";
import styled from "styled-components";
import svg from "../assets/contact.svg";
import img1 from "../assets/display1.jpeg";
import img2 from "../assets/display2.jpeg";
import img3 from "../assets/display3.jpeg";
import img4 from "../assets/display4.jpeg";
import img5 from "../assets/display5.png";
import { services } from "../utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <Wrapper>
      <div className="section-center">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="font-bold bannerText max-w-sm text-black uppercase">
              Where Style Meets Comfort
            </h2>
          </div>
          <div className="flex justify-between">
            <p className="text-sm bannerText font-semibold">
              Discover The Perfect Fusion
            </p>
            <p className="max-w-xs text-sm bannerText">
              Shoes that pay homage to the thrill of competition Slip into a
              piece of history and stay comfortable wherever the day may lead.
              Every step connects you to a legacy of sport and style meant for
              the whole world to see.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3 mb-24">
          <div data-aos="fade-right" data-aos-duration="3000">
            <img src={img2} alt="" />
            <p className="max-w-md uppercase py-5 font-bold text-black text-2xl bannerText">
              Elegance, Comfort and trend are the essence of what we offer
            </p>
          </div>
          <div className="mt-10" data-aos="fade-left" data-aos-duration="3000">
            <img src={img3} alt="" />
          </div>
          <div>
            <img
              src={img1}
              data-aos="fade-right"
              data-aos-duration="3000"
              alt=""
            />
          </div>
          <div className="-mt-20" data-aos="fade-up" data-aos-duration="3000">
            <img src={img5} alt="" />
            <p className="uppercase font-bold text-right text-black text-2xl bannerText">
              Discover footwear
            </p>
            <p className="uppercase font-bold text-right text-black text-2xl bannerText">
              that redefines your look—
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: white;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
