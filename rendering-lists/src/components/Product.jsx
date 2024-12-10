import React from "react";

export default function Product({ product }) {
  return (
    <div className="product">
      <h2>{product?.name}</h2>
      <p>₹{product?.price}</p>
      <button onClick={() => console.log(`${product?.name} is clicked`)}>
        Click
      </button>
    </div>
  );
}
