import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useIncrementProductCartMutation } from "../../../../redux/service/cart.service";


const Increment = ({ p, me }) => {
  const [increment] = useIncrementProductCartMutation();
  const { handleSubmit } = useForm();

  const submit = (e) => {
    if (p.Cart_Product.quantity < p.stock) {
        increment({ idCart: me, idProduct: p.Cart_Product.idProduct, ...e });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay producto en Stock",
        });
      }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input className="listCart__btnIcon" type="submit" value='+'/>
    </form>
  );
};

export default Increment;
