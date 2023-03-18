import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import CancelOrder from "./CancelOrder";

const UserOrders = ({ order, i }) => {
  return (
    <section className="cardOrder">
      <Link className="cardOrder__linkStyle" to={`/order_detail/${order.id}`}>
        <section className="cardOrder__item">
          {/* <div className="cardOrder__data"> */}
          <h5>Order no: { i }</h5>
          <span>{order.orderDate.slice(0, 10)}</span>
        </section>
        <section className="cardOrder__item">
          <span>{order.shipmentState}</span>
        </section>
      </Link>
      <section className="cardOrder__item">
        <h5>Total: ${order.total}</h5>
        {order.shipmentState != "enviado" && <CancelOrder idOrder={order.id} />}
      </section>
    </section>
  );

  // return (
  //   <Container className="user_orders_container">
  //     <section className="user_orders_item">
  //       <Container className="order_item_header">
  //         <section className="status_section">
  //           <div className="status">
  //             <ion-icon name="ellipse" class="status_icon"></ion-icon>
  //             <label className="status_label">{order.shipmentState}</label>
  //           </div>
  //           <div>
  //             Total: $<span>{order.total}</span>
  //           </div>
  //         </section>
  //         <section className="date_section">
  //           <label className="date_label">
  //             Created: <span>{order.orderDate.slice(0,10)}</span>
  //           </label>
  //         </section>
  //       </Container>
  //       <hr />
  //       <Container className="orden_detail_section">
  //         <section className="photo_item">
  //           <Image src={order.Order_Details[0].Product.image} alt={order.Order_Details[0].Product.name}className="user_order_image" />
  //         </section>
  //         <section className="item_details_section">
  //           <label className="item_name">
  //           {order.Order_Details[0].Product.name}
  //           </label>
  //           <label className="item_qty">
  //             Quantity: <span>{order.Order_Details[0].quantity}</span>
  //           </label>
  //         </section>
  //         <section className="price_item_section">
  //           <label className="price_item_label">{order.Order_Details[0].Product.unitPrice}</label>
  //         </section>
  //       </Container>
  //       {order.shipmentState!='enviado'&&<CancelOrder me={14} order={order}/>}
  //     </section>
  //   </Container>
  // );
};

export default UserOrders;
