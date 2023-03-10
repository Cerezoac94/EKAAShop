import { useGetAllProductsQuery } from "../../../../redux/service/product.service"
import Product from "./Product"

const ProductsMap = () => {
    const{data:results=[], isLoading, error}=useGetAllProductsQuery()
    
  return (
    isLoading?<h3>Cargando...</h3>:(
        results.results.map((product)=>(
            <Product key={product.id}/>
        ))
    )
  )
}

export default ProductsMap