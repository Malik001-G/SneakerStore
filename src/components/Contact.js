import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="py-20 lg:py-0 section-center">
        <h3 className="bannerText">Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Sign up for our newsletter and instantly save 20% on your next pair
            of kicks! Be the first to know about new arrivals, limited releases,
            and special deals—because great style starts with staying in the
            loop
          </p>
          {/* <form
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
          </form> */}

          <form
            className="flex items-center w-full"
            action="https://formspree.io/f/mkgwnglz"
            method="POST"
          >
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                </svg>
              </div>
              <input
                type="email"
                className="bg-gray-50 border transition-all duration-300 ease-linear outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-[#7f1d1d] focus:border-[#7f1d1d] block w-full ps-10 p-2.5 py-3"
                name="_replyto"
                placeholder="Your email address..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex transition-all duration-300 ease-linear items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#7f1d1d] rounded-lg bannerText hover:shadow-sm focus:ring-0 focus:outline-none"
            >
              Subscribe
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
