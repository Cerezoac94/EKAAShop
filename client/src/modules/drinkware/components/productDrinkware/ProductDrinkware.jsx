import React from 'react'

const ProductDrinkware = ({ product }) => {
  return (
    <section>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img src={`${product.image}`} alt={product.name} />
      <span>{product.price}</span>
      <span>{product.stock}</span>
    </section>
  )
}

export default ProductDrinkware