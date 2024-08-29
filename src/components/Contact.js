import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3 className="bannerText">Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Sign up for our newsletter and instantly save 20% on your next pair
            of kicks! Be the first to know about new arrivals, limited releases,
            and special deals—because great style starts with staying in the
            loop
          </p>
          <form
            action="https://formspree.io/f/mkgwnglz"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              className="form-input bg-gray-100 bannerText focus:ring-0 outline-none"
              name="_replyto"
              placeholder="enter email"
              required
            />
            <button
              type="submit"
              className="bg-red-900 outline-none bannerText submit-btn text-gray-200"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
