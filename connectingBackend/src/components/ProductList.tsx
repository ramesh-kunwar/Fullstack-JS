import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products....");
    setProducts([...products, category]);
  }, [category]);

  return (
    <div>
      {products.map((product) => {
        return <h3 key={Math.random()}>{product}</h3>;
      })}
    </div>
  );
};

export default ProductList;
