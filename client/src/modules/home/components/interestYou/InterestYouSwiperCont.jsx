import ErrorFetch from "../../../../components/errors/ErrorFetch";
import Loading from "../../../../components/loading/Loading";
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import InterestYouSwiper from "./InterestYouSwiper";


const InterestYouSwiperCont = () => {
    const { data: results = [], isLoading, error } = useGetAllProductsQuery();

    const random =()=>{
        return Math.random() - 0.5
    }
    let interest =[]

    if (!isLoading) {
        interest = structuredClone(results.results);
        interest.sort(random)
    }

    
  return (
    error ? (
        <ErrorFetchrFetch title={error} message={error.data.message} />
      ) : isLoading ? (
        <Loading />
    ):(
        <InterestYouSwiper interest={interest}/>
    )
  )
}

export default InterestYouSwiperCont