import React from "react";
import img_stanley from '../../../../assets/stanley_tumbler.jpg'

const ListCart = () => {
  return (
    <section className="listCart">

      <section className="listCart__card">
        <article className="listCart__contText">
          <h2 className="listCart__h2">
            Subtotal: <span className="listCart__span">$980.00</span>
          </h2>
          <div className="listCart__div">
            <button className="listCart__btn">Proceed to checkout </button>
          </div>
        </article>
      </section>
      
      <section className="listCart_container">
      <section className="listCart__cardTwo">
        <article className="listCart__contenedorTxt">
          <div className='listCart__contimg'>
          <img src={img_stanley} className='listCart__img' alt="" />
          </div>
         
          <div className="listCart__text">
            <h2 className="listCart__confirmation">Added to cart</h2>
            <span className="listCart__desc">Vaso Térmico de Acero Inoxidable, Taza Termica Frio y Caliente</span>
            <span className="listCart__price">$950.00</span>
            <small className="listCart__stock">In stock</small>
            <label className="listCart__price">Color: <span className="listCart__color">Rosa Navy</span></label>
            <label className="listCart__price">Size: <span className="listCart__color">1 count</span></label>
          </div>
        </article>
        <article className="listCart__footer">
          <div className="listCart__contBtn">
            <button className="listCart__btnIcon"><ion-icon name="remove-outline"></ion-icon></button>
            <input className="listCart__inputIcon" type="text" />
            <button className="listCart__btnIcon"><ion-icon name="add-outline"></ion-icon></button>
          </div>

          <div className="listCart__contBtnTwo">
            <div>
              <button className="listCart__btnThird">Delete</button>
            </div>
          </div>
        </article>

      </section>
      <section className="listCart__cardTwo">
        <article className="listCart__contenedorTxt">
          <div className='listCart__contimg'>
          <img src={img_stanley} className='listCart__img' alt="" />
          </div>
         
          <div className="listCart__text">
            <h2 className="listCart__confirmation">Added to cart</h2>
            <span className="listCart__desc">Vaso Térmico de Acero Inoxidable, Taza Termica Frio y Caliente</span>
            <span className="listCart__price">$950.00</span>
            <small className="listCart__stock">In stock</small>
            <label className="listCart__price">Color: <span className="listCart__color">Rosa Navy</span></label>
            <label className="listCart__price">Size: <span className="listCart__color">1 count</span></label>
          </div>
        </article>
        <article className="listCart__footer">
          <div className="listCart__contBtn">
            <button className="listCart__btnIcon"><ion-icon name="remove-outline"></ion-icon></button>
            <input className="listCart__inputIcon" type="text" />
            <button className="listCart__btnIcon"><ion-icon name="add-outline"></ion-icon></button>
          </div>

          <div className="listCart__contBtnTwo">
            <div>
              <button className="listCart__btnThird">Delete</button>
            </div>
          </div>
        </article>

      </section>
      
      </section>
    
      
      {/*   <h3 className="listCart__h3condicional"><ion-icon name="checkmark-circle-outline"></ion-icon> Tu pedido contiene envio GRATIS </h3> */}
      
    </section>
  );
};

export default ListCart;
