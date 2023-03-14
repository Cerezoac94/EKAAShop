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
        <label className="title_label">Stanley AeroLight</label>
        <Container className="product_description_container">
          <p className="product_description">
            Botella de transporte con aislamiento al vacío para café, té y
            bebidas con acero inoxidable ultraligero
          </p>
        </Container>
        <hr />
        <label className="product_price">$350.00</label>
      </section>
      <section className="buying_info_section">
        <label className="product_price">$350.00</label>
        <label className="feeds_label">Import Feeds Included</label>
        <label className="product_delivery_label">
          <span className="product_free_ship_label">Entrega GRATIS</span> el
          Domingo 4 de marzo. Realiza tu pedido ahora.
        </label>
        <label className="stock_item">In Stock</label>
        <div className="quantity_dropdown">
          <label for="quantity_item">Quantity:</label>
          <select name="qty" id="qty" className="add_qty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <section className="action_products_btns_section">
          <button className="add_product_btn">Add to Cart</button>
        </section>
      </section>
    </Container>
  );
};

export default ProductDetailDesktop;
