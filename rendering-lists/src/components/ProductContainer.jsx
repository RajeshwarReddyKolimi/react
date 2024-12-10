import React, { useState } from "react";
import ProductList from "./ProductList";

export default function ProductContainer() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Prod 1",
      price: 999,
    },
    {
      id: 2,
      name: "Prod 2",
      price: 1999,
    },
    {
      id: 3,
      name: "Prod 3",
      price: 499,
    },
    {
      id: 4,
      name: "Prod 4",
      price: 2999,
    },
    {
      id: 5,
      name: "Prod 5",
      price: 1499,
    },
    {
      id: 6,
      name: "Prod 6",
      price: 299,
    },
  ]);
  return (
    <main>
      <h1>Products</h1>
      <ProductList products={products} />
    </main>
  );
}
