import React from "react";
const Warranty = () => {
  return (
    <section className="warranty">
     
          <section className="warranty__options">
            <article className="warranty__join">
              <ion-icon
                className="warranty__icons"
                name="shield-checkmark-sharp"
              ></ion-icon>
              <div className="warranty__txtContainer">
                <h3 className="warranty__textWarranty">1 año de garantia</h3>
                <span>Garantia Disponible</span>
              </div>
            </article>
            <article className="warranty__join">
              <ion-icon
                name="cube-sharp"
                className="warranty__icons"
              ></ion-icon>
              <div className="warranty__txtContainer">
                <h3 className="warranty__textWarranty">Envios gratis</h3>
                <span>En compras mayores a $500.00</span>
              </div>
            </article>
            <article className="warranty__join">
              <ion-icon
                name="ribbon-sharp"
                className="warranty__icons"
              ></ion-icon>
              <div className="warranty__txtContainer">
                <h3 className="warranty__textWarranty">Best quality</h3>
                <span>La mejor calidad al mejor precio</span>
              </div>
            </article>
          </section>
       
    </section>
  );
};

export default Warranty;
