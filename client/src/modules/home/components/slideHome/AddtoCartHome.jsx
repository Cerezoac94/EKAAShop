import { useForm } from "react-hook-form";
import { useAddProductCartMutation } from "../../../../redux/service/cart.service";
import { useEffect } from "react";
import Swal from "sweetalert2";

const AddtoCartHome = ({ p, me }) => {
  const [addToCart, { data }] = useAddProductCartMutation();
  const { register, handleSubmit, reset } = useForm();

  const submit = (e) => {
    me ? addToCart({ id: me, idProduct: p, ...e })
      : Swal.fire({
          position: "top",
          icon: "error",
          title: "You must register to add products to your cart",
          showConfirmButton: true,
        });
  };

  useEffect(() => {
    if (data)
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Producto Agregado con éxito",
        showConfirmButton: false,
        timer: 1000,
      });

  }, [data]);

  return (
    <form className="addtoCartHome">
      <input
        {...register("quantity")}
        value={1}
        className="addtoCartHome__input"
      />

      <button className="slide__btn" onClick={handleSubmit(submit)}>
        Add To Cart
      </button>
    </form>
  );
};

export default AddtoCartHome;
