import BannerOffersMap from "./components/bannerOffers/BannerOffersMap"
import InterestYouSwiper from "./components/interestYou/InterestYouSwiper"
import KeepBuyingMap from "./components/keepBuying/KeepBuyingMap"
import ReviewsClient from "./components/reviewsClient/ReviewsClient"
import Warranty from "./components/warranty/Warranty"
import { useMeQuery } from "../../redux/service/session.service"
import Loading from "../../components/loading/Loading"
import SlideHomeSwipeMap from "./components/slideHome/SlideHomeSwipeMap"

const HomeContainer = () => {
  const { data: me, isLoading, error } = useMeQuery()
  return (

    <>
      {/* <SlideHomeMap/> */}
      <SlideHomeSwipeMap/>
      <Warranty/>
      <InterestYouSwiper/>
      <BannerOffersMap/>
      <ReviewsClient/>
     { isLoading ? ( <Loading/>
     ) : ( !error && <KeepBuyingMap me={me.result.id}/> ) }
</>
  )
}
export default HomeContainer