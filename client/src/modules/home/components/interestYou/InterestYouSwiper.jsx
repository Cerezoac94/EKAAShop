import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
 
import Container from "react-bootstrap/esm/Container";

import img from "../../../../assets/stanley_tumbler.svg";

const InterestYouSwiper = () => {
  
    
  return (
    <section>
      InterestYouSwiper
      <Swiper
     slidesPerView={1}
     spaceBetween={10}
     pagination={{
       clickable: true,
     }}
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
     modules={[Pagination]}
     className="mySwiper"
    
      >
        <Container>
          <SwiperSlide>
            <section className="interestYou">
              <article className="interestYou__description">
                <div>
                  <img className="interestYou__img" src={img} alt="product" />
                </div>

                <div className="interestYou__text">
                  <label htmlFor="name" className="interestYou__label">
                    Termo Yeti 30 Oz.
                  </label>
                  <span className="interestYou__priceItem">
                    Acero Inoxidable Rosa
                  </span>
                  {""}

                  <span className="interestYou__priceItem">$1500.00</span>
                  <span className="interestYou__stockitem">In Stock</span>
                  <div>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </article>
            </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="interestYou">
              <article className="interestYou__description">
                <div>
                  <img className="interestYou__img" src={img} alt="product" />
                </div>

                <div className="interestYou__text">
                  <label htmlFor="name" className="interestYou__label">
                    Termo Yeti 30 Oz.
                  </label>
                  <span className="interestYou__priceItem">
                    Acero Inoxidable Rosa
                  </span>
                  {""}

                  <span className="interestYou__priceItem">$1500.00</span>
                  <span className="interestYou__stockitem">In Stock</span>
                  <div>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </article>
            </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="interestYou">
              <article className="interestYou__description">
                <div>
                  <img className="interestYou__img" src={img} alt="product" />
                </div>

                <div className="interestYou__text">
                  <label htmlFor="name" className="interestYou__label">
                    Termo Yeti 30 Oz.
                  </label>
                  <span className="interestYou__priceItem">
                    Acero Inoxidable Rosa
                  </span>
                  {""}

                  <span className="interestYou__priceItem">$1500.00</span>
                  <span className="interestYou__stockitem">In Stock</span>
                  <div>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </article>
            </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="interestYou">
              <article className="interestYou__description">
                <div>
                  <img className="interestYou__img" src={img} alt="product" />
                </div>

                <div className="interestYou__text">
                  <label htmlFor="name" className="interestYou__label">
                    Termo Yeti 30 Oz.
                  </label>
                  <span className="interestYou__priceItem">
                    Acero Inoxidable Rosa
                  </span>
                  {""}

                  <span className="interestYou__priceItem">$1500.00</span>
                  <span className="interestYou__stockitem">In Stock</span>
                  <div>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
              </article>
            </section>
          </SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Container>
      </Swiper>
    </section>
  );
};

export default InterestYouSwiper;
