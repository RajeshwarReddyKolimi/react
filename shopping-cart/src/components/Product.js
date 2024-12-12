import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartProvider";

export default function Product({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  function toggleCart() {
    if (isAddedToCart)
      setCart((prevCart) =>
        prevCart?.filter((prod) => prod?.id !== product.id)
      );
    else setCart((prevCart) => [...prevCart, product]);
  }
  useEffect(() => {
    setIsAddedToCart(cart?.includes(product));
  }, [cart]);
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
      <button onClick={toggleCart}>
        {isAddedToCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
