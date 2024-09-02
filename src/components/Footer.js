import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="py-3 bannerText ">
        <div className="flex justify-center gap-2 mb-1">
          <p className="mb-0 text-white">
            &copy; {new Date().getFullYear()}
            <span className="text-red-900 font-bold"> Ultra Sneakers</span>
          </p>
          <p className="mb-0 text-white">All rights reserved.</p>
        </div>

        <div>
          <p className="mb-0 text-white font-semibold"> HOL Community ❤️. </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  // height: 5rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  background: var(--clr-black);
  text-align: center;
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
