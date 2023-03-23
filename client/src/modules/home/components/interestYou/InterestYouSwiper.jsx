import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import Loading from "../../../../components/loading/Loading";
import "swiper/css/pagination";

const InterestYouSwiper = () => {
  const { data: results = [], isLoading, error } = useGetAllProductsQuery();
  if (!error) {
    return isLoading ? (
      <Loading />
    ) : (
      results.length != 0 && (
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            490: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {results?.results?.slice(0, 10).map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <Link to={`/product_detail/${e.id}`}>
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
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )
    );
  }
};

export default InterestYouSwiper;
