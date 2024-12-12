import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import CartProduct from "./CartProduct";
import { CartContext } from "./CartProvider";

export default function Cart() {
  const { cart, setShowCart } = useContext(CartContext);
  return (
    <div className="cart-backdrop">
      <div className="cart">
        <h1>My Cart</h1>
        {cart?.length ? (
          <div className="products-container">
            {cart?.map((product) => (
              <CartProduct product={product} />
            ))}
          </div>
        ) : (
          <p>No products in cart</p>
        )}
        <button
          className="cart-close-button"
          onClick={() => setShowCart(false)}
        >
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
}
