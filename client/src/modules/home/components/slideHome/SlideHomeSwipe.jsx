import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Card from "react-bootstrap/Card";
import img_cup_3 from "../../../../assets/yetis_a1.png"
import { Pagination } from "swiper";


const SlideHomeSwipe = () => {
  return (
  
<Swiper
      /* spaceBetween={50} */
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={true} modules={[Pagination]} className="mySwiper"
    >
         
  
      <SwiperSlide >
        {" "}
    
        <Card border="primary">
        
          <Card.Body className="slideHome">
          <Card.Text >
            <div  className='slideHome__text'>
            <label  className="">Set Yeti 20 Oz & </label>
              <label htmlFor="">Rambler colster 12 Oz</label>
            </div>
             
              <div>
                <button className='slideHome__btn'>Comprar</button>
                <button className='slideHome__btn2' >ver mas</button>
              </div>
            </Card.Text>
          <Card.Img variant="top" src={img_cup_3} className='slideHome__img '  />
         
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide >
        {" "}
    
        <Card border="primary">
        
          <Card.Body className="slideHome">
          <Card.Text >
            <div  className='slideHome__text'>
            <label  className="">Set Yeti 20 Oz & </label>
              <label htmlFor="">Rambler colster 12 Oz</label>
            </div>
             
              <div>
                <button className='slideHome__btn'>Comprar</button>
                <button className='slideHome__btn2' >ver mas</button>
              </div>
            </Card.Text>
          <Card.Img variant="top" src={img_cup_3} className='slideHome__img '  />
         
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide >
        {" "}
    
        <Card border="primary">
        
          <Card.Body className="slideHome">
          <Card.Text >
            <div  className='slideHome__text'>
            <label  className="">Set Yeti 20 Oz & </label>
              <label htmlFor="">Rambler colster 12 Oz</label>
            </div>
             
              <div>
                <button className='slideHome__btn'>Comprar</button>
                <button className='slideHome__btn2' >ver mas</button>
              </div>
            </Card.Text>
          <Card.Img variant="top" src={img_cup_3} className='slideHome__img '  />
         
          </Card.Body>
        </Card>
      </SwiperSlide>
      
   
    
  
    </Swiper>
  )
}

export default SlideHomeSwipe