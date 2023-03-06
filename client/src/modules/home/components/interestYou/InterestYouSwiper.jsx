import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
/* import "./styles.css"; */
import { Pagination } from "swiper";
 import img from  '../../../../assets/stanley_tumbler.svg'

const InterestYouSwiper = () => {
  return (
    <section>
        InterestYouSwiper

<Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
        <Container>

       
      <SwiperSlide>
      <Card className="interestYou__container">
              <Card.Img variant="top" src={img} /> 
              <Card.Body className="might_like_item_body">
                <Card.Text className="might_like_item_details">
                  <label htmlFor="name" className="name_item">sdfsdf</label>
                  <span className="price_item"> holo</span>
                  <span className="stock_item">In Stock</span>
                </Card.Text>
              </Card.Body>
            </Card>
      </SwiperSlide>
      </Container>
      <Container>
      <SwiperSlide>
      <Card className="interestYou__container">
              <Card.Img variant="top" src={img} /> 
              <Card.Body className="might_like_item_body">
                <Card.Text className="might_like_item_details">
                  <label htmlFor="name" className="name_item">sdfsdf</label>
                  <span className="price_item"> holo</span>
                  <span className="stock_item">In Stock</span>
                </Card.Text>
              </Card.Body>
            </Card>
      </SwiperSlide>
      </Container>
      <SwiperSlide>
      <Card className="interestYou__container">
              <Card.Img variant="top" src={img} /> 
              <Card.Body className="might_like_item_body">
                <Card.Text className="might_like_item_details">
                  <label htmlFor="name" className="name_item">sdfsdf</label>
                  <span className="price_item"> holo</span>
                  <span className="stock_item">In Stock</span>
                </Card.Text>
              </Card.Body>
            </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card className="might_like_item_container">
              <Card.Img variant="top" src={img} /> 
              <Card.Body className="might_like_item_body">
                <Card.Text className="might_like_item_details">
                  <label htmlFor="name" className="name_item">sdfsdf</label>
                  <span className="price_item"> holo</span>
                  <span className="stock_item">In Stock</span>
                </Card.Text>
              </Card.Body>
            </Card>
      </SwiperSlide>
      
    </Swiper>


    </section>
  )
}

export default InterestYouSwiper