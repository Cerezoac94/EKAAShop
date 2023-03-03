import BannerOffersMap from "./components/bannerOffers/BannerOffersMap"
import BuyAgainMap from "./components/buyagain/BuyAgainMap"
import InterestYouMap from "./components/interestYou/InterestYouMap"
import KeepBuyingMap from "./components/keepBuying/KeepBuyingMap"
import ReviewsClientMap from "./components/reviewsClient/ReviewsClientMap"
import SlideHomeMap from "./components/slideHome/SlideHomeMap"
import Warranty from "./components/warranty/Warranty"

const HomeContainer = () => {
  return (
    <section>
      <SlideHomeMap/>
      <Warranty/>
    
      <InterestYouMap/>
      <BannerOffersMap/>
      <ReviewsClientMap/>
      <KeepBuyingMap/>
      <BuyAgainMap/>
     

    </section>
  )
}
export default HomeContainer