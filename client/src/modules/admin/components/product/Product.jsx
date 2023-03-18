import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
<Link to= {`product_mutation/${product.id}`} className="product_name_list">
        <li>{product.name}</li>
    </Link>
  )
}

export default Product