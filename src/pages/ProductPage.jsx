import React from "react";
import { Link } from "react-router-dom";

const ProductPageWebsite = ({ products }) => {
  return (
    <div>
      <div className="row">
        {products.map((product, index) => (
            <div className="col" key={index}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPageWebsite;
