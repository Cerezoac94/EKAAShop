import React from "react";
import {Link} from 'react-router-dom'
// import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
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
<Link to={`/product_detail/${product.id}`} className="product_item_container">
          <Image
            src={`${product.image}`}
            alt={product.name}
            className="product_image"
          />
          <label className="product_item_name">{product.name}</label>
          <label className="product_item_price">$ {product.price}</label>
{/*           <div className="rate_icons_container product_item_description">
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
          </div> */}
</Link>
  );
};

export default ProductDrinkware;
