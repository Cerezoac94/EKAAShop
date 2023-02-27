import React from 'react'

const BuyAgain = ({element}) => {
  return (
    <section>
        <h1>BuyAgain</h1>
        <span>{element.produStock}</span>
        <span>{element.price}</span>


    </section>
  )
}

export default BuyAgain