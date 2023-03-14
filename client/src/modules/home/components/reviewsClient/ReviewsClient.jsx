import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useGetAllReviewsQuery } from "../../../../redux/service/review.service";
const ReviewsClient = ({ e }) => {
  const { data: results = [], isLoading, error } = useGetAllReviewsQuery();
  if (!error) {
    return isLoading ? (
      <h3>cargandoo.</h3>
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
          modules={[Pagination]}
          className="mySwiper"
        >
     
     { results?.results?.slice(0,10).map(e => {
      return (

<SwiperSlide key={e.id}>
            <section className="reviews">
              <article className="reviews__container">
                {/*   <h2>Reviews Client</h2> */}

                <div className="reviews__icons">
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <ion-icon name="star-sharp"></ion-icon>
                  <h5 className="reviews__reiting">{e.rating}</h5>
                </div>

                <h5 className="reviews__h3">{e.title}</h5>
                <div className="reviews__descContainer">
                  <img
                    className=" reviews__img"
                    src={e.Product.image}
                    alt={e.Product.name}
                  />
                  <p>{e.description}</p>
                </div>

                <div className="reviews__text">
                  <h6>{e.User.userName}</h6>
                  <span>{e.reviewDate}</span>
                </div>
              </article>
            </section>
          </SwiperSlide>


      )


     })

     }

          
        </Swiper>
      )
    );
  }
};

export default ReviewsClient;
