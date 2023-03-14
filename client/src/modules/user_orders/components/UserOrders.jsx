import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import stanley from "../../../assets/stanley_tumbler.svg";
const UserOrders = () => {
  return (
    <Container className="user_orders_container">
      <section className="user_orders_header">
        <h1>My Orders</h1>
      </section>

      <section className="user_orders_item">
        <Container className="order_item_header">
          <section className="status_section">
            <div className="status">
              <ion-icon name="ellipse" class="status_icon"></ion-icon>
              <label className="status_label">Pending</label>
            </div>
            <div>
              Total: $<span>350</span>
            </div>
          </section>
          <section className="date_section">
            <label className="date_label">
              Created: <span>2023-03-12</span>
            </label>
          </section>
        </Container>
        <hr />
        <Container className="orden_detail_section">
          <section className="photo_item">
            <Image src={stanley} className="user_order_image" />
          </section>
          <section className="item_details_section">
            <label className="item_name">
              Vaso Térmico de Acero Inoxidable, Taza Termica Frio y Caliente.
            </label>
            <label className="item_qty">
              Quantity: <span>4</span>
            </label>
          </section>
          <section className="price_item_section">
            <label className="price_item_label">$350</label>
          </section>
        </Container>
      </section>
      <section className="cancel_order_button">
        <Button className="cancel_user_order">Cancel order</Button>
      </section>
    </Container>
  );
};

export default UserOrders;
