import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useMeQuery } from "../../../../redux/service/session.service";
import { Link } from "react-router-dom";
import "swiper/scss";
//import 'swiper/css/autoplay';
import AddtoCartHome from "./AddtoCartHome";

const SlideHomeSwipe = ({ products }) => {
  const { data: me=[], error:err} = useMeQuery();

  return <Swiper
      modules={[Autoplay]}
      className="myswiper"
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
/*       autoplay={{delay:5000}} */
    >
      {products.slice(0, 6).map((p) => {
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
                    <button className="slide__seeBtn">Ver mas</button>
                  </Link>
                </section>
              </section>
              <img className="slide__imgSlide" src={p.image} alt={p.name} />
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
};

export default SlideHomeSwipe;
