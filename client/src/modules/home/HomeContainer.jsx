import BannerOffersMap from "./components/bannerOffers/BannerOffersMap"
import InterestYouSwiper from "./components/interestYou/InterestYouSwiper"
import KeepBuyingMap from "./components/keepBuying/KeepBuyingMap"
import ReviewsClient from "./components/reviewsClient/ReviewsClient"
import Warranty from "./components/warranty/Warranty"
import { useMeQuery } from "../../redux/service/session.service"
import SlideHomeSwipe from "./components/slideHome/SlideHomeSwipe"
import Loading from "../../components/loading/Loading"

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
     { isLoading ? ( <Loading/>
     ) : ( !error && <KeepBuyingMap me={me.result.id}/> ) }
</>
  )
}
export default HomeContainer