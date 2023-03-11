import { useGetWishQuery } from "../../../../redux/service/wish.service"
import KeepBuying from "./KeepBuying"

const KeepBuyingMap = ({ me }) => {
    const { data:results=[], isLoading, error } = useGetWishQuery(me);
    // console.log(results?.results?.Products)
    return error ? (<h3>{error?.data?.message}</h3>) :(
  isLoading ? ( <h3>Cargando...</h3>
  ):(
    
    results.results.Products.length > 0 &&(
   <section>
   <h1>KeepBuying</h1>

    <section className="keepBuyingContainer">
    
    {results.results.Products.slice(0,4).map(product => <KeepBuying product={product} key={product.id} />)}
    </section>
    </section>)
  ))
}

export default KeepBuyingMap