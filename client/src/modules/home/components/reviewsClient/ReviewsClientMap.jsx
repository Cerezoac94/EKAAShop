import React from 'react'
import ReviewsClient from './ReviewsClient'

const ReviewsClientMap = () => {
    const reviews=[{
      id: 1,
        start:'REVIEW 1',
        desc:'Description review Lorem  ',
        user:'euge25',
        type:'cooler'
    },{
      id: 2,
        start:'REVIEW 2',
        desc:'Description review Lorem2  ',
        user:'kat22',
        type:'Yeti'
    }]
  return (
    reviews.map(e => {
       return <ReviewsClient element={e} key={e.id}/>
    })
   
  )
}

export default ReviewsClientMap