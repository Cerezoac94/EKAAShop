import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const ReviewsClient = ({ e }) => {
  return (
    <Swiper 
    slidesPerView={1}
    spaceBetween={10}
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
      className="mySwiper">
      <SwiperSlide>
      
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
{/*       <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
    </Swiper>
  );
};

export default ReviewsClient;
