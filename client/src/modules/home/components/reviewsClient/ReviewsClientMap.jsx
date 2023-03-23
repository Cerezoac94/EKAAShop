import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useGetAllReviewsQuery } from "../../../../redux/service/review.service";
import Loading from "../../../../components/loading/Loading";
import ReviewsClient from "./ReviewsClient";
const ReviewsClientMap = () => {
  const { data: results = [], isLoading, error } = useGetAllReviewsQuery();

  if (!error) {
    return isLoading ? (
      <Loading />
    ) : (
      results.length != 0 && (
        <Swiper
          className="swiperReview"
          slidesPerView={1}
          breakpoints={
            {1000:{
              slidesPerView:2
            }}
          }
          pagination={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          // centeredSlides={true}
        >
          {results?.results?.slice(0, 10).map((e) => {
            return (
              <SwiperSlide  key={e.id}>
                <ReviewsClient  r={e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )
    );
  }
};

export default ReviewsClientMap;
