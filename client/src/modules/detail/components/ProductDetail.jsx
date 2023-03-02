import React from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import stanley_cup from "../../../assets/stanley_tumbler.jpg";
import MightLike from "./MightLike";

const ProductDetail = () => {
  return (
    <Container fluid className="product_detail_container">
      <section className="product_detail_header">
        <label className="product_detail_label">Lorem ipsum dolor sit</label>
        <Container className="rate_icons_container">
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </Container>
      </section>
      <section>
        <Container className="product_detail_description_container">
          <p className="product_detail_description">
            Vaso Térmico de Acero Inoxidable, Taza Termica Frio y Caliente para
            Cafe con 2-Tapa y 2-Pajita, 2-Cepillo de Limpieza,Termo Infusor de
            Vacío Doble para Hombre, Mujer, Regalo (20oz/600ml,Negro)
          </p>
          <ion-icon name="share-outline" class="share_product_icon"></ion-icon>
        </Container>
        <Container className="image_product_container">
          <Image fluid src={stanley_cup} />
          <ion-icon name="heart-outline" class="add_product_icon"></ion-icon>
        </Container>
      </section>
      <section>
        <MightLike />
      </section>
      <section className="product_detail_footer_container">
        <span className="product_price">$350.00</span>
        <span className="product_delivery_label">
          <span className="product_free_ship_label">Entrega GRATIS</span> el
          Domingo 4 de marzo. Realiza tu pedido ahora.
        </span>
      </section>
      <section className="action_products_btns">
        <button className="add_product_btn">Add to Cart</button>
        <button className="buy_product_btn">Buy now</button>
      </section>
    </Container>
  );
};

export default ProductDetail;
