import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import stanley from "../../../../assets/stanley_tumbler.svg";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const WishProductsList = ( { w } ) => {
  // console.log("🚀 ~ file: WishProductsList.jsx:9 ~ WishProductsList ~ w:", w)

  return (
    <Container className="wish_list_container">
      <section className="wish_header_section"></section>
      <section className="wish_item_section">
        <Link to={`/product_detail/${w.id}`} className="wish_item_container">
          <section className="wish_product_image_section">
            <Image src={w.image} alt={w.name} className="wish_image"/>
          </section>
          <section>
            <h6>{w.name}</h6>
            <span className="product_delivery">{w.price}</span>
          </section>
        </Link>
        <section className="wish_btns_container">
          <Button href="/" className="delete_product_btn">
            Delete
          </Button>
        </section>
      </section>
    </Container>
  );
};

export default WishProductsList;
