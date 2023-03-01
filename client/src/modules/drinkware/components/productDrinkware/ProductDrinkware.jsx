import React from "react";
//import Link from 'react-router-dom'
//import Container from "react-bootstrap/Container";

const ProductDrinkware = ({ product }) => {
  /*   return (
    <section>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={`${product.image}`} alt={product.name} />
      <span>{product.price}</span>
      <span>{product.stock}</span>
    </section>
  ) */

  return (
        <div className="product_item_container">
          <img
            src={`${product.image}`}
            alt={product.name}
            className="product_image"
          />
          <span className="product_item_name">{product.name}</span>
          <span className="product_item_description">{product.price}</span>
          <div className="rate_icons_container product_item_description">
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
          </div>
        </div>
  );
};

export default ProductDrinkware;
