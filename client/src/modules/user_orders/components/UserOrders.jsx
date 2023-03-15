import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import stanley from "../../../assets/stanley_tumbler.svg";
const UserOrders = ({ order }) => {
  return (
    <Container className="user_orders_container">
      <section className="user_orders_item">
        <Container className="order_item_header">
          <section className="status_section">
            <div className="status">
              <ion-icon name="ellipse" class="status_icon"></ion-icon>
              <label className="status_label">{order.shipmentState}</label>
            </div>
            <div>
              Total: $<span>{order.total}</span>
            </div>
          </section>
          <section className="date_section">
            <label className="date_label">
              Created: <span>{order.orderDate.slice(0,9)}</span>
            </label>
          </section>
        </Container>
        <hr />
        <Container className="orden_detail_section">
          <section className="photo_item">
            <Image src={order.Order_Details[0].Product.image} alt={order.Order_Details[0].Product.name}className="user_order_image" />
          </section>
          <section className="item_details_section">
            <label className="item_name">
            {order.Order_Details[0].Product.name}              
            </label>
            <label className="item_qty">
              Quantity: <span>{order.Order_Details[0].quantity}</span>
            </label>
          </section>
          <section className="price_item_section">
            <label className="price_item_label">{order.Order_Details[0].Product.unitPrice}</label>
          </section>
        </Container>
        <section className="cancel_order_button">
          <Button className="cancel_user_order">Cancel order</Button>
        </section>
      </section>
    </Container>
  );
};

export default UserOrders;
