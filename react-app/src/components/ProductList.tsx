import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [product, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["Clothing", "household"]);
  }, [category]);
  return (
    <div className="m-5">
      <h1>Product List</h1>
    </div>
  );
};

export default ProductList;
