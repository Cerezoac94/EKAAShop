import { useAddProductCartMutation } from "../../../../redux/service/cart.service";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import PlusSvg from "./plusSvg";
import MenusSvg from "./MenusSVG";
import Swal from 'sweetalert2'

const AddToCart = ({ p, me }) => {
  const [addToCart, {data}] = useAddProductCartMutation();
  const [qty, setQty] = useState(1);
  const { register, handleSubmit, reset } = useForm();

  const submit = (e) => {
      return addToCart({ id: me, idProduct: p.id, ...e })
  }
  const increment = () => {
    qty < p.stock ? setQty(qty + 1) : Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay producto en Stock',
      });
  };
  const decrement = () => {
    qty > 1 ? setQty(qty - 1) : Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cantidad tiene que ser mayor a 0',
      });
  };

  const resetState = () => setQty(1)

  useEffect(() => {
    reset({ qty });
    // console.log("🚀 ~ file: AddToCart.jsx:31 ~ useEffect ~ reset:", reset)
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
    resetState()
  }, [data]);

  

  return (
    <form className="add">
      <section className="add__container">
        <section >
          <button className="add__plusMenus" type="button" onClick={decrement}>
            <MenusSvg />
          </button>
        </section>

        <input {...register("quantity")} value={qty} className='add__input' />

        <section >
          <button className="add__plusMenus" type="button" onClick={increment}>
            <PlusSvg />
          </button>
        </section>

      </section>
      <section className="add__containSubmit">
        <section >
          <button className="add__submit" onClick={handleSubmit(submit)}>Add To Cart</button>
        </section>
      </section>
    </form>
  );
};

export default AddToCart;
