import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "react-bootstrap/Card";
import cup from "../../../assets/stanley_tumbler.jpg";
import Container from "react-bootstrap/esm/Container";
const MightLike = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Card className="might_like_item_container">
          <Card.Img variant="top" src={cup} />
          <Card.Body className="might_like_item_body">
            <Card.Text className="might_like_item_details">
              <label htmlFor="name" className="name_item">Stanley Adventure Quencher</label>
              <span className="price_item">$ 350.00</span>
              <span className="stock_item">In Stock</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide >
        {" "}
        <Card className="might_like_item_container">
          <Card.Img variant="top" src={cup} />
          <Card.Body className="might_like_item_body">
          <Card.Text className="might_like_item_details">
              <label htmlFor="name" className="name_item">Stanley Adventure Quencher</label>
              <span className="price_item">$ 350.00</span>
              <span className="stock_item">In Stock</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide >
        {" "}
        <Card className="might_like_item_container">
          <Card.Img variant="top" src={cup} />
          <Card.Body className="might_like_item_body">
          <Card.Text className="might_like_item_details">
              <label htmlFor="name" className="name_item">Stanley Adventure Quencher</label>
              <span className="price_item">$ 350.00</span>
              <span className="stock_item">In Stock</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide >
        {" "}
        <Card className="might_like_item_container">
          <Card.Img variant="top" src={cup} />
          <Card.Body className="might_like_item_body">
          <Card.Text className="might_like_item_details">
              <label htmlFor="name" className="name_item">Stanley Adventure Quencher</label>
              <span className="price_item">$ 350.00</span>
              <span className="stock_item">In Stock</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default MightLike;
