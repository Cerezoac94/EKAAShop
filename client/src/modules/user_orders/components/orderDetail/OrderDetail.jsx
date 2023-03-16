import React from 'react'

const OrderDetail = ({p}) => {
  console.log("🚀 ~ file: OrderDetail.jsx:4 ~ OrderDetail ~ p:", p)
  
  return (

    
      
      <section className='card'>

      <section>
        <figure>
          <img src={p.Product.image} alt="" />
        </figure>
      </section>
      <section>

      </section>

      </section>
    
  )
}

export default OrderDetail