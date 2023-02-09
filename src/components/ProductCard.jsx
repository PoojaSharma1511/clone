import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const { image, title, price } = product;

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart(product))
  };
  

  return (
    <div className="product">
      <img src={image} alt="" />
      <h1>{title} </h1>
      <span>
        <h3>Price : {price}</h3>
        <button className="add_cart" onClick={() => handleClick()}>
          Add to cart
        </button>
      </span>
    </div>
  );
}

export default ProductCard;
