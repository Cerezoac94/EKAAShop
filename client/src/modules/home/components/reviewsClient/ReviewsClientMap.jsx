import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useGetAllReviewsQuery } from "../../../../redux/service/review.service";
// import "swiper/scss";
import Loading from "../../../../components/loading/Loading";
import ReviewsClient from "./ReviewsClient";
const ReviewsClientMap = ({ e }) => {
  const { data: results = [], isLoading, error } = useGetAllReviewsQuery();

  if (!error) {
    return isLoading ? (
      <Loading />
    ) : (
      results.length != 0 && (
        <Swiper
            
            slidesPerView={3}
            spaceBetween={2}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            pagination={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            // centeredSlides={true}
        
        >
          {results?.results?.slice(0, 10).map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <ReviewsClient r={e} />;
              </SwiperSlide>
            );
          })}
        </Swiper>
      )
    );
  }
};

export default ReviewsClientMap;
