import KeepBuyingMap from "./components/keepBuying/KeepBuyingMap"
import Warranty from "./components/warranty/Warranty"
import { useMeQuery } from "../../redux/service/session.service"
import Loading from "../../components/loading/Loading"
import SlideHomeSwipeMap from "./components/slideHome/SlideHomeSwipeMap"
import BannerOffersCont from "./components/bannerOffers/BannerOffersCont"
import ReviewsClientMap from "./components/reviewsClient/ReviewsClientMap"
import InterestYouSwiperCont from "./components/interestYou/InterestYouSwiperCont"

const HomeContainer = () => {
  const { data: me, isLoading, error } = useMeQuery()
  return (

    <>
      <SlideHomeSwipeMap/>
      <Warranty/>
      <InterestYouSwiperCont/>
      <BannerOffersCont/>
      <ReviewsClientMap/>
     { isLoading ? ( <Loading/>
     ) : ( !error && <KeepBuyingMap me={me.result.id}/> ) }
</>
  )
}
export default HomeContainer