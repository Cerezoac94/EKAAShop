
import BannerOffersMap from "./components/bannerOffers/BannerOffersMap"
import InterestYouSwiper from "./components/interestYou/InterestYouSwiper"
import KeepBuyingMap from "./components/keepBuying_buyAgain/KeepBuyingMap"
import ReviewsClient from "./components/reviewsClient/ReviewsClient"
import ReviewsClientMap from "./components/reviewsClient/ReviewsClientMap"
import SlideHomeMap from "./components/slideHome/SlideHomeMap" 
import Warranty from "./components/warranty/Warranty"


const HomeContainer = () => {
  return (

    <>
      <SlideHomeMap/>
      <Warranty/>
      <InterestYouSwiper/>
      <BannerOffersMap/>
      <ReviewsClient/>
      <KeepBuyingMap me={1}/>
      {/* <BuyAgainMap me={1}/> */}


    </>
  )
}
export default HomeContainer