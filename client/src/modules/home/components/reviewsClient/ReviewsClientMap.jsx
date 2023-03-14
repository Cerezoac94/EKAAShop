import React from 'react'
import ReviewsClient from './ReviewsClient'
/* import {useGetAllProductsQuery} from '../../../../redux/service/product.service' */
import {useGetAllReviewsQuery} from '../../../../redux/service/review.service'

const ReviewsClientMap = () => {
const { data: results = [], isLoading, error } = useGetAllReviewsQuery();
if(!error) {
  return isLoading ? (<h3> cargando</h3>) :   (
    results.length != 0 &&(results?.results.slice(0,1).map(e  => (<ReviewsClient e={e} key={e.id}/>))
    )
  )

  /*  ESTE ARCHIVO NO SE ESTA USANDO,  MAPIE TODO EN ReviewClient.jsx */
}
} 

export default ReviewsClientMap