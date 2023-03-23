import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import Loading from "../../../../components/loading/Loading";
import "swiper/css";
import "swiper/css/pagination";

const InterestYouSwiper = () => {
  const { data: results = [], isLoading, error } = useGetAllProductsQuery();
  if (!error) {
    return isLoading ? (
      <Loading />
    ) : (
      results.length != 0 && (
        <section className="interestSection">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              560: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
              2560: {
                slidesPerView: 5,
              },
            }}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            {results?.results?.slice(0, 10).map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <section className="interestCont">
                    <Link to={`/product_detail/${e.id}`}>
                      <div className="interestCont__Card">
                        <div>
                          <h3 className="interestCont__name">{e.name}</h3>
                        </div>
                        <img
                          className="interestCont__img"
                          src={e.image}
                          alt={e.name}
                        />
                        <div className="interestCont__valores">
                          <span className="interestCont__span">
                            {e.Category.name}
                          </span>
                          <div className="interestCont__price">
                            <h3>${e.price}</h3>
                            <p className="interestCont__span">MXN</p>
                          </div>

                          <div className="interestCont__stock"></div>
                        </div>
                      </div>
                    </Link>
                  </section>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      )
    );
  }
};

export default InterestYouSwiper;
