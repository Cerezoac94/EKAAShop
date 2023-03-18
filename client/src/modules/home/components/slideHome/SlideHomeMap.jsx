// import { Swiper } from "swiper/react";
// import { SwiperSlide } from "swiper/react";
// import { useGetAllProductsQuery } from "../../../../redux/service/product.service";
// import SlideHomeSwipe from "./SlideHomeSwipe";
// import "swiper/css";
// import "swiper/css/scrollbar";

// const SlideHomeMap = () => {
//   const { data: results = [], isLoading, error } = useGetAllProductsQuery();

//   return error ? (
//     error.message
//   ) : isLoading ? (
//     <h3>Cargando...</h3>
//   ) : (
//     <Swiper className="swiper">
//       {results.results.slice(0, 3).map((p) => (
//         <SwiperSlide className="mySwiper__item" key={p.id}>
//           <SlideHomeSwipe slot="container-start" p={p} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
// export default SlideHomeMap;
