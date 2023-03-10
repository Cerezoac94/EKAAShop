import React from 'react'
import ReviewsClient from './ReviewsClient'
/* import {useGetAllProductsQuery} from '../../../../redux/service/product.service' */
import {useGetAllReviewsQuery} from '../../../../redux/service/review.service'

const ReviewsClientMap = () => {
/* const {data:products, isLoading}=useGetAllProductsQuery(); */
const {data:products=[], isLoading, error }= useGetAllReviewsQuery();
console.log(products)
/* products?.results.slice(0,4).map( (e)  => {
 console.log(e)
}) */  

/* return error ? (<h3>{error?.data?.message}</h3>) :(

isLoading ? (
    <h3>Cargando...</h3>):(
    results.length != 0 && (results.results.map(category => (
      <Category category={category} key={category.id} />)))
      )) */



  return error ? (<h3> {error?.data?.message}</h3>) :
  
  (isLoading ? (<h2> cargando</h2>) :   (
    products?.results.slice(0,1).map( (e , id)  => {
     return (<ReviewsClient e={e} key={id}/>)
     })  
  )
  

  )
  
}

export default ReviewsClientMap