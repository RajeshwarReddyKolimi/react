import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartProvider";

export default function CartProduct({ product }) {
  const { cart, setCart } = useContext(CartContext);
  function removeFromCart() {
    setCart((prevCart) => prevCart?.filter((prod) => prod?.id !== product.id));
  }
  return (
    <div className="product-card">
      <div>
        <img
          src={product?.images?.[0] ?? ""}
          className="product-image"
          alt={product?.title}
        />
      </div>
      <div>
        <p>{product?.title}</p>
        <p>${product?.price}</p>
      </div>
      <button onClick={removeFromCart}>Remove From Cart</button>
    </div>
  );
}
