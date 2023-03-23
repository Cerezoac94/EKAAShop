import React from "react";
import { Link } from "react-router-dom";
import CancelOrder from "./CancelOrder";

const UserOrders = ({ order, i }) => {
  return (
    <section className="cardOrder">
      <Link className="cardOrder__linkStyle" to={`/order_detail/${order.id}`}>
        <section className="cardOrder__item">
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
};

export default UserOrders;
