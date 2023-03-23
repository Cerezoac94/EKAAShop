import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import Loading from "../../../../components/loading/Loading";
import SlideHomeSwipe from "./SlideHomeSwipe";

const SlideHomeSwipeMap = () => {
  const { data: results = [], isLoading, error } = useGetAllProductsQuery();
  const random = () => {
    return Math.random() - 0.5
  }

  let products = []
  if(!isLoading){
  products = structuredClone(results.results)
  products.sort(random)
  }
  return error ? (
    error?.message
  ) : isLoading ? (
    <Loading/>
  ) : ( <SlideHomeSwipe products={products}/> )
}
export default SlideHomeSwipeMap