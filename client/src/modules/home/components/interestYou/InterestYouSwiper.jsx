import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useGetAllProductsQuery } from "../../../../redux/service/product.service";

const InterestYouSwiper = () => {
  const  {data:results= [], isLoading, error } = useGetAllProductsQuery();
  if(!error){
    return isLoading ? (
      <h3>Cargando...</h3>
    ) : ( results.length != 0 && ( 	<Swiper
			slidesPerView={3}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			breakpoints={{
				200: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				490: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				700: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
			}}
			modules={[Navigation, Pagination]}
			className="mySwiper"
		>
      {results?.results?.slice(0,10).map(e => {
					return (
			<SwiperSlide key={e.id}>
				<section className="interestYou">
					<article className="interestYou__description">
						<div>
							<img className="interestYou__img" src={e.image} alt={e.name}/>
						</div>

						<div className="interestYou__text">
							<label htmlFor="name" className="interestYou__label">
								{e.name}
							</label>
							{""}

							<span className="interestYou__priceItem">{`$${e.price}`}</span>
							<span className="interestYou__stockitem">{`stock: ${e.stock}`}</span>
							<div>
								<ion-icon name="star"></ion-icon>
								<ion-icon name="star"></ion-icon>
								<ion-icon name="star"></ion-icon>
								<ion-icon name="star"></ion-icon>
							</div>
						</div>
					</article>
				</section>
			</SwiperSlide>)})}
		</Swiper>))}
};

export default InterestYouSwiper;
