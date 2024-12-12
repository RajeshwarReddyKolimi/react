import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

export default function Navbar() {
  const { setShowCart } = useContext(CartContext);
  function toggleShowCart() {
    setShowCart((prev) => !prev);
  }
  return (
    <nav>
      <ul>
        <li>Shopit</li>
        <li>
          <button onClick={toggleShowCart}>Cart</button>
        </li>
      </ul>
    </nav>
  );
}
