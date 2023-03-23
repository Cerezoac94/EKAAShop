// import CreateOrder from "./CreateOrder";
import { useEffect } from "react";
import Decrement from "../../modules/shoppinCart/components/listCart/Decrement";
import DeleteProductCart from "../../modules/shoppinCart/components/listCart/DeleteProductCart";
import Increment from "../../modules/shoppinCart/components/listCart/Increment";
import { useAddProductWishMutation } from "../../redux/service/wish.service";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const WishCart = ({ p, title, me }) => {
  const [addProductWish, { data }] = useAddProductWishMutation();

  const handledelete = (e) => {
    addProductWish({ idUser: me, idProduct: e });
  };

  useEffect(() => {
    if (data)
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Producto eliminado con éxito",
        showConfirmButton: false,
        timer: 1000,
      });
  }, [data]);

  return (
    <section className="shopping">
      <section className="shopping__contImg">
        <img className="shopping__img" src={p.image} alt="p.name" />

        {title == "Cart" && (
          <div className="addmenus">
            <Decrement p={p} me={me} />
            <p className="listCart__inputIcon">{p.Cart_Product.quantity}</p>
            <Increment p={p} me={me} />
          </div>
        )}
      </section>

      <section>
        <div>
          <Link to={`/product_detail/${p.id}`}>
            <section className="listCart__labels">
              <h2 className="listCart__confirmation">{`Se añadio ${title}`}</h2>
              <span className="listCart__desc">{p.name}</span>
              <span className="listCart__price">${p.price}</span>

              {p.stock != 0 ? (
                <span className="listCart__stock">Disponible</span>
              ) : (
                <span className="listCart__stock"> No disponible </span>
              )}
              <span className="listCart__color">Stock: {p.stock}</span>
            </section>
          </Link>
        </div>

        <div>
          {title == "Cart" && (
            <div className=" listCart__pay">
              <div>
                <h4 className="listCart__h2">
                  Subtotal:{" "}
                  <span className="listCart__span">
                    ${parseInt(p.price) * p.Cart_Product.quantity}
                  </span>
                </h4>
              </div>
              <div className="listCart__contBtnThird">
                <DeleteProductCart me={me} p={p} />
              </div>
            </div>
          )}

          {title == "Wish" && (
            <section className="listCart__contBtnThird">
              <button
                onClick={() => handledelete(p.id)}
                className="listCart__deleteWishBtn"
              >
                Delete
              </button>
            </section>
          )}
        </div>
      </section>
    </section>
  );
};

export default WishCart;
