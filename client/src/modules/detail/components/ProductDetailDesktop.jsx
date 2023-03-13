import React from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import stanley_cup from "../../../assets/stanley_tumbler.jpg";

const ProductDetailDesktop = () => {
  return (
    <Container className="product_details_desktop_container">
      <section className="product_image_section">
        <Image fluid src={stanley_cup} />
        <ion-icon name="heart-outline" class="add_product_icon"></ion-icon>
      </section>
      <section className="product_detail_header">
        <section className="product_rate_container">
          <label className="rate_product_label">Lorem ipsum dolor sit</label>
          <Container className="rate_icons_container">
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
            <ion-icon name="star-outline" class="rate_icons"></ion-icon>
          </Container>
        </section>
        <Container className="product_description_container">
          <p className="product_description">
            Vaso Térmico de Acero Inoxidable, Taza Termica Frio y Caliente para
            Cafe con 2-Tapa y 2-Pajita, 2-Cepillo de Limpieza,Termo Infusor de
            Vacío Doble para Hombre, Mujer, Regalo (20oz/600ml,Negro)
          </p>
        </Container>
        <span className="product_price">$350.00</span>
      </section>
      <section className="buying_info_container">
          <span className="product_price">$350.00</span>
          <span>Import Feeds Included</span>
          <span className="product_delivery_label">
            <span className="product_free_ship_label">Entrega GRATIS</span> el
            Domingo 4 de marzo. Realiza tu pedido ahora.
          </span>
          <span className="stock_item">In Stock</span>
          <div className="quantity_dropdown">
            <label for="quantity_item">Quantity:</label>
            <select name="cars" id="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <section className="action_products_btns_container">
            <button className="add_product_btn">Add to Cart</button>
          </section>
{/*           <hr class="solid"></hr>
          <button className="buy_product_btn">Wish List</button> */}
      </section>
    </Container>
  );
};

export default ProductDetailDesktop;
