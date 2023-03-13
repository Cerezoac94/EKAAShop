import React from "react";

const Buynow = () => {
  return (
    <section className="BuyNow">
      <section>
      <article  className="BuyNow__pay">
        <h2>Seleccione un metodo de pago</h2>
        <button className="BuyNow__btn">Continuar</button>
      </article>
      </section>
     <section className="BuyNow__containerTwo">
     <article className="BuyNow__firtsCard">
        <div className="BuyNow__icon">
          <ion-icon name="ellipse-outline"></ion-icon>
        </div>
        <div className="BuyNow__desc">
          <h3>Visa****9495</h3>
          <label htmlFor="">Eugenia Ramirez Salinas</label>
          <span> Vence el 07/26</span>
        </div>
      </article>
      <article className="BuyNow__firtsCard">
        <div className="BuyNow__icon">
          <ion-icon name="ellipse-outline"></ion-icon>
        </div>
        <div className="BuyNow__desc">
          <h3>Pago en efectivo</h3>
          <label htmlFor="">Paga antes de las 72 horas</label>
          <span> Paga en OXX0, 7-Eleven, +5 tiendas</span>
        </div>
      </article>
      <article className="BuyNow__twoCard">
        <div className="BuyNow__desc">
          <h3>Agregar otro metodo de pago</h3>
        </div>
        <div className="BuyNow__iconT">
        <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </article>


     </section>
     
    </section>
  );
};

export default Buynow;
