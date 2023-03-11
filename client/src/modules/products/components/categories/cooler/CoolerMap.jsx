import { useGetProductByCategoryQuery } from "../../../../../redux/service/product.service"
// import Product from "../../Product"
import Product from "../../presentacional/Product";

const CoolerMap = () => {
    const { data:results = [], isLoading, error }=useGetProductByCategoryQuery(2)
    
    return error ? (
        <h3>{error?.data?.message}</h3>
      ) : isLoading ? (
        <h3>Cargando...</h3>
      ) : (        
        results.results[0].Products.map((p)=><Product product={p} key={p.id}/>)
      )
}

export default CoolerMap