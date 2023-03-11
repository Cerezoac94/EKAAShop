import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Link to= {`product_mutation/${product.id}`}>
        {product.name}
    </Link>
  )
}

export default Product