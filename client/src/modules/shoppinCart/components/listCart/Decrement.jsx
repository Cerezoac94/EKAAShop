import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDecrementProductCartMutation } from "../../../../redux/service/cart.service";


const Decrement = ({ p, me }) => {
  // console.log("🚀 ~ file: Decrement.jsx:5 ~ Decrement ~ p:", p);
  const [decrement] = useDecrementProductCartMutation();
  const { handleSubmit } = useForm();

  const submit = (e) => {
    if (p.Cart_Product.quantity > 1) {
      decrement({ idCart: me, idProduct: p.Cart_Product.idProduct, ...e });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cantidad tiene que ser mayor a 0",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input className="listCart__btnIcon" type="submit" value="-" />
    </form>
  );
};

export default Decrement;
