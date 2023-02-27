import React from 'react'

const KeepBuying = ({element}) => {
  return (
    <section>
        <h1>KeepBuying</h1>
        <span>{element.product}</span>
        <span>{element.price}</span>


    </section>
  
  )
}

export default KeepBuying