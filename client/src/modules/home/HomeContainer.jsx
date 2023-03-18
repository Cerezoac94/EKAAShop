import BannerOffersMap from "./components/bannerOffers/BannerOffersMap"
import InterestYouSwiper from "./components/interestYou/InterestYouSwiper"
import KeepBuyingMap from "./components/keepBuying/KeepBuyingMap"
import ReviewsClient from "./components/reviewsClient/ReviewsClient"
import ReviewsClientMap from "./components/reviewsClient/ReviewsClientMap"
import SlideHomeSwipe from "./components/slideHome/SlideHomeSwipe"
// import SlideHomeMap from "./components/slideHome/SlideHomeMap" 
import Warranty from "./components/warranty/Warranty"
import { useMeQuery } from "../../redux/service/session.service"

const HomeContainer = () => {
  const { data: me, isLoading, error } = useMeQuery()
  return (

    <>
      {/* <SlideHomeMap/> */}
      <SlideHomeSwipe/>
      <Warranty/>
      <InterestYouSwiper/>
      <BannerOffersMap/>
      <ReviewsClient/>
     { isLoading ? ( <h3>Cargando...</h3>
     ) : ( !error && <KeepBuyingMap me={me.result.id}/> ) }
</>
  )
}
export default HomeContainer