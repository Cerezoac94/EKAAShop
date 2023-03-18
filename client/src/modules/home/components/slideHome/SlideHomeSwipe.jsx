import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
import "swiper/scss";

const SlideHomeSwipe = () => {
  const { data: results = [], isLoading, error } = useGetAllProductsQuery();

  return error ? (
    error?.message
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    <Swiper
      className="wiper"
      // slidesPerView={3}
      spaceBetween={30}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
    >
      {results?.results?.slice(0, 3).map((p) => {
        return (
          <SwiperSlide className="swiper" key={p.id}>
            <article section className="slide">
              <section className="slide__nameProduct">
                <section className="slide__name">
                  <label className="slide__font">Set Yeti 20 Oz & </label>
                  <label className="slide__font">Rambler colster 12 Oz</label>
                </section>

                <section>
                  <button className="slide__btn">Comprar</button>
                  <button className="slideHome__btn2">ver mas</button>
                </section>
              </section>
              <img className="imgSlide" src={p.image} alt={p.name} />
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
  /* <section>
          <div className="slideHome">
            <article>
              <div className="slideHome__text">
                <label className="">Set Yeti 20 Oz & </label>
                <label htmlFor="">Rambler colster 12 Oz</label>
              </div>

              <div>
                <button className="slideHome__btn">Comprar</button>
                <button className="slideHome__btn2">ver mas</button>
              </div>
            </article>
            <img src={img_cup_3} className="slideHome__img " alt="slide" />
          </div>
        </section> */
};

export default SlideHomeSwipe;
