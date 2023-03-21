import React from "react";
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
const ProductDrinkware = ({ product }) => {
console.log(product)
  return (
<Link to={`/product_detail/${product.id}`} className="product_item_container">
<label className="product_item_name">{product.name}</label>
          <Image src={`${product.image}`}
            alt={product.name}
            className="product_image" />
            <label htmlFor=""> {product.Category.name}</label>
           <label htmlFor="">{product.stock}</label>
          <label className="product_item_price">$ {product.price}</label>
</Link>
  ); 
};

export default ProductDrinkware;
