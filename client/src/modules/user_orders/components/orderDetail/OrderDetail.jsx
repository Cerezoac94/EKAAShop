import React from "react";

const OrderDetail = ({ p }) => {
  // console.log("🚀 ~ file: OrderDetail.jsx:4 ~ OrderDetail ~ p:", p)
  // console.log("🚀 ~ file: OrderDetail.jsx:4 ~ OrderDetail ~ p:", p);

  return (
    <section className="card">
      <figure className="card__imgCont">
        <img className="card__img" src={p.Product.image} alt="" />
      </figure>

      <section className="card__detalle">
        <h4>Articulo: {p.Product.name}</h4>
        <h5>Precio: ${p.unitPrice} <span className="card__mxn">MXN</span></h5>
        <h5>Cantidad: {p.quantity}</h5>
      </section>
      
    </section>
  );
};

export default OrderDetail;
