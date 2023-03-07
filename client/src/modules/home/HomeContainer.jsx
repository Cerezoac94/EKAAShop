import BannerOffersMap from "./components/bannerOffers/BannerOffersMap"
import InterestYouMap from "./components/interestYou/InterestYouMap"
import KeepBuyingMap from "./components/keepBuying_buyAgain/KeepBuyingMap"
import BuyAgainMap from "./components/keepBuying_buyAgain/BuyAgainMap"
import ReviewsClientMap from "./components/reviewsClient/ReviewsClientMap"
import SlideHomeMap from "./components/slideHome/SlideHomeMap"
import Warranty from "./components/warranty/Warranty"

const HomeContainer = () => {
  return (
    <>
      <SlideHomeMap/>
      <Warranty/>
    
      <InterestYouMap/>
      <BannerOffersMap/>
      <ReviewsClientMap/>
      <KeepBuyingMap me={1}/>
      <BuyAgainMap me={1}/>
     

    </>
  )
}
export default HomeContainer