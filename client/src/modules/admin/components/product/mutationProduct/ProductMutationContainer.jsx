import { useParams } from "react-router-dom"
import { useGetProductByIdQuery } from "../../../../../redux/service/product.service"

const ProductMutationContainer = () => {
  const {id} = useParams()
  //Const {is}= useGetCategoryById(id)
  return (
    //Category
    <h1>holaproduct</h1>
    // <Detail category={id}/>
    //Delete
    //<Category.id> 
  )
}

export default ProductMutationContainer