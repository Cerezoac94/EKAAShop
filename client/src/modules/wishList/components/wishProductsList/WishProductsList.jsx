import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import stanley from "../../../../assets/stanley_tumbler.svg";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const WishProductsList = () => {
  return (
    <Container className="wish_list_container">
      <section className="wish_header_section">
        <h4>#WhishList</h4>
      </section>
      <section className="wish_item_section">
        <Link to="/product_detail" className="wish_item_container">
          <section className="wish_product_image_section">
            <Image src={stanley} alt={stanley} className="wish_image" />
          </section>
          <section>
            <h6>
              Vaso Térmico de Acero Inoxidable, Taza Termica Frio y Caliente{" "}
            </h6>
            <span className="product_delivery">Envio gratis</span>
          </section>
        </Link>
        <section className="wish_btns_container">
              <Button href="/"className="add_to_cart_btn">Add to Cart</Button>
              <Button href="/"className="delete_product_btn">Delete</Button>
            </section>
      </section>
    </Container>
  );
};

export default WishProductsList;
