import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import Loading from "../../../../components/loading/Loading";

const InterestYouSwiper = () => {
  const { data: results = [], isLoading, error } = useGetAllProductsQuery();
  if (!error) {
    return isLoading ? (
      <Loading />
    ) : (
      results.length != 0 && (
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            490: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {results?.results?.slice(0, 10).map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <section className="interestYou">
                  <div className="interestYou__productsContainer">
                    <div className="interestYou__product">
                      <figure className="interestYou__imagen">
                        <img
                          className="interestYou__img"
                          src={e.image}
                          alt={e.name}
                        />
                      </figure>

                      <div className="interestYou__namePrice">
                        <h3>{e.name}</h3>
                        <span>{`$${e.price}`}</span>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )
    );
  }
};

export default InterestYouSwiper;
