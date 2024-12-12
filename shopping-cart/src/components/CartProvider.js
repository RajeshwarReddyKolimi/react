import React, { createContext, useState } from "react";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import Cart from "./Cart";

export const CartContext = createContext();
export default function CartProvider() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  return (
    <CartContext.Provider value={{ cart, setCart, setShowCart }}>
      <Navbar />
      <div className="nav-buffer"></div>
      <ProductList />
      {showCart && <Cart />}
    </CartContext.Provider>
  );
}
