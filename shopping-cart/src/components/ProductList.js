import React from "react";
import products from "./products.json";
import Product from "./Product";
export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products?.map((product) => (
          <Product product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
}
