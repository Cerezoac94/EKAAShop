import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const ProductDetail = () => {
  return (
    <Container fluid>
      <section className='product_detail_header'>
      <label className='product_detail_label'>Lorem ipsum dolor sit</label>
      <div className="rate_icons_container">
      <ion-icon name="star-outline"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
      </div>
      </section>
    </Container>
  )
}

export default ProductDetail