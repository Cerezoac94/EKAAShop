import React from 'react'
import ReviewsClient from './ReviewsClient'
/* import {useGetAllProductsQuery} from '../../../../redux/service/product.service' */
import {useGetAllReviewsQuery} from '../../../../redux/service/review.service'

const ReviewsClientMap = () => {
/* const {data:products, isLoading}=useGetAllProductsQuery(); */
const {data:products=[], isLoading }= useGetAllReviewsQuery();
/* products?.results.slice(0,4).map( (e)  => {
 console.log(e)
}) */  
  return (isLoading ? (<h2> cargando</h2>) :   (
    products?.results.slice(0,1).map( (e , id)  => {
     return (<ReviewsClient e={e} key={id}/>)
     })  
  )
  

  )
  
}

export default ReviewsClientMap