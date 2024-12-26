import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="text-center my-4">Loading...</h2>;

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-secondary mb-3">Back to Products</Link>
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ objectFit: "contain", height: "400px" }}
          />
        </div>
        <div className="col-md-8">
          <h2>{product.title}</h2>
          <p className="lead">{product.description}</p>
          <h4 className="text-success">${product.price}</h4>
          <p>Category: {product.category}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
