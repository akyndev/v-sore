import React from "react";
import Product from "./product";

const Products = () => {
  return (
    <div className="container mx-auto">
      <div className="grid px-4 md:px-0 grid-cols-1 lg:grid-cols-4 gap-8">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
