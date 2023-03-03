import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "react-bootstrap/Card";

const MightLike = ({ items }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Card className="might_like_item_container">
              <Card.Img variant="top" src={`${item?.image}`} />
              <Card.Body className="might_like_item_body">
                <Card.Text className="might_like_item_details">
                  <label htmlFor="name" className="name_item">{item.name}</label>
                  <span className="price_item">$ {item.price}</span>
                  <span className="stock_item">In Stock</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MightLike;
