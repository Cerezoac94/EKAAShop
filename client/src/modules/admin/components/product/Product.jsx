import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Link to= {`product_mutation/${product.id}`}>
        <li>{product.name}</li>
    </Link>
  )
}

export default Product