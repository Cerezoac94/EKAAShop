import { Swiper, SwiperSlide } from "swiper/react";
import { useMeQuery } from "../../../../redux/service/session.service";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery} from "../../../../redux/service/product.service";
import "swiper/scss";
import AddtoCartHome from "./AddtoCartHome";

const SlideHomeSwipe = () => {
  const { data: results = [], isLoading, error } = useGetAllProductsQuery();
  const { data: me=[], error:err} = useMeQuery();

  return error ? (
    error?.message
  ) : isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    <Swiper
      className="myswiper"
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
    >
      {results?.results?.slice(0, 6).map((p) => {
        return (
          
          <SwiperSlide className="swiper" key={p.id}>
            <article className="slide">
              <section className="slide__nameProduct">
                <section className="slide__name">
                  <label className="slide__font">{p.name}</label>
                  {/* <label className="slide__font">Rambler colster 12 Oz</label> */}
                </section>

                <section className="slide__botons">
                  {!err?(<AddtoCartHome p={p.id} me={me.result.id}/>):<AddtoCartHome p={p.id}/>}
                  <Link to={`/product_detail/${p.id}`}>
                    <button className="slide__btn2">Ver mas</button>
                  </Link>
                </section>
              </section>
              <img className="slide__imgSlide" src={p.image} alt={p.name} />
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideHomeSwipe;
