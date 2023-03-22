import { useAddProductCartMutation } from "../../../../redux/service/cart.service";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AddToCart = ({ p, me }) => {
  const [addToCart, { data }] = useAddProductCartMutation();
  const [qty, setQty] = useState(1);
  const { register, handleSubmit, reset } = useForm();

  const submit = (e) => {
    me
      ? addToCart({ id: me, idProduct: p.id, ...e })
      : Swal.fire({
          position: "top",
          icon: "error",
          title: "You must register to add products to your cart",
          showConfirmButton: true,
        });
  };
  const increment = () => {
    qty < p.stock
      ? setQty(qty + 1)
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay suficiente producto en Stock",
        });
  };
  const decrement = () => {
    qty > 1
      ? setQty(qty - 1)
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Cantidad tiene que ser mayor a 0",
        });
  };

  const resetState = () => setQty(1);

  useEffect(() => {
    reset({ qty });
  }, [qty, reset]);

  useEffect(() => {
    if (data)
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Producto Agregado con éxito",
        showConfirmButton: false,
        timer: 1000,
      });
    resetState();
  }, [data]);

  return (
    <form className="add">
      <section className="add__container">
        <section>
          <button className="add__plusAction" type="button" onClick={decrement}>
            <ion-icon name="remove-outline"></ion-icon>
          </button>
        </section>

        <input {...register("quantity")} value={qty} className="add__input" />

        <section>
          <button className="add__plusAction" type="button" onClick={increment}>
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </section>
      </section>
      <section className="add__containSubmit">
        <button className="add__addSubmit" onClick={handleSubmit(submit)}>
          Add To Cart
        </button>
      </section>
    </form>
  );
};

export default AddToCart;
