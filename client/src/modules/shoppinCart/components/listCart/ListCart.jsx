import CreateOrder from "./CreateOrder";
import Decrement from "./Decrement";
import DeleteProductCart from "./DeleteProductCart";
import Increment from "./Increment";

const ListCart = ({ p }) => {
  // console.log("🚀 ~ file: ListCart.jsx:6 ~ ListCart ~ p:", p)
  return (
    <>
      <section className="listCart">
        <section>
          <article className=" listCart__card">
            <h2 className="listCart__h2">
              Subtotal:{" "}
              <span className="listCart__span">
                ${parseInt(p.price) * p.Cart_Product.quantity}
              </span>
            </h2>
            {/* <button className="listCart__btn">Proceed to checkout </button> */}
          </article>
        </section>
        <section className="listCart__allContainer">
          {/*  <section> */}
          <article className="listCart__containerProd">
            <div className="listCart__contimg">
              <img src={p.image} className="listCart__img" alt={p.name} />
              <div className="listCart__contBtn">
                <Decrement p={p} me={14} />
                <p className="listCart__inputIcon">{p.Cart_Product.quantity}</p>
                <Increment p={p} me={14} />
              </div>
            </div>
            <div className="listCart__text">
              <div className="listCart__labels">
                <h2 className="listCart__confirmation">Added to cart</h2>
                <span className="listCart__desc">{p.name}</span>
                <span className="listCart__price">${p.price}</span>

                <div>
                  {p.stock != 0 ? (
                    <small className="listCart__stock">In stock</small>
                  ) : (
                    <small className="listCart__stock">Out stock</small>
                  )}
                </div>

                {/* <label className="listCart__price">
                Color: <span className="listCart__color">Rosa Navy</span>
              </label> */}
                <label className="listCart__price">
                  Stock: <span className="listCart__color">{p.stock}</span>
                </label>
              </div>
              <div className="listCart__contBtnThird">
                <DeleteProductCart me={14} p={p} />
              </div>
            </div>
          </article>
        </section>
      </section>
      <section>
        <CreateOrder me={14} />
      </section>
    </>
  );
};

export default ListCart;
