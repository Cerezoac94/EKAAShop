import React from 'react'

const ReviewsClient = ( {element}) => {
  return (

    <section>
      <h1>Reviews Client</h1>
    <span>{element.start}</span> <br></br>
    <span>{element.desc}</span>
    <span>{element.user}</span>
    <span>{element.type}</span>
    </section>
   
  )
}

export default ReviewsClient