import React from 'react'
import InterestYouSwiper from './InterestYouSwiper'
import { useGetAllProductsQuery} from '../../../../redux/service/product.service';
import { SwiperSlide } from 'swiper/react';


const InterestYouMap = () => {
 
  // instancio el endpoint
  const  {data:results= [], isLoading, error } = useGetAllProductsQuery();
   console.log(results)
  if(!error) {
    return isLoading ? ( <h1>Cargando ......</h1>) : (
     results.length !=0 && (results?.results.slice(0,4).map(e => ( 
      
      
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
 
 

       <SwiperSlide key={e.id}>    
      <section  className="interestYou">
      <article className="interestYou__description">
        <div>
          <img className="interestYou__img" src={e.image} alt="product" />
        </div>
        <div className="interestYou__text">
          <label htmlFor="name" className="interestYou__label">
          {/*   {e.name} */}
          </label>
          <span className="interestYou__priceItem">
         {e.description}
          </span>
          {""}

          <span className="interestYou__priceItem">{e.price}</span>
          <span className="interestYou__stockitem">{e.stock}</span>
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
    </Swiper>
     )     ))
    )
  }

}

export default InterestYouMap
