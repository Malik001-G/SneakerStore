import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      {/* <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>

      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer> */}
      <div class="w-full xl:w-72 bg-white shadow-md rounded-xl duration-500 lg:hover:scale-105 lg:hover:shadow-xl">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt="Product"
            class="h-80 w-full xl:w-72 bg-gray-200 object-cover rounded-t-xl"
          />
          <div class="px-3 py-3 w-72">
            <p class="text-sm font-bold text-black truncate block capitalize">
              {name}
            </p>
            <div>
              <p class="text-lg font-semibold text-red-900 cursor-auto my-3">
                {formatPrice(price)}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: white;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
