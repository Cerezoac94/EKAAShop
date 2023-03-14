import { useDeleteProductCartMutation } from "../../../../redux/service/cart.service";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const DeleteProductCart = ({ me, p }) => {
  // console.log("🚀 ~ file: DeleteProductCart.jsx:8 ~ DeleteProductCart ~ p:", p)
  const [deleteProductCart, { data }] = useDeleteProductCartMutation();

  const { handleSubmit } = useForm();

  const submit = (e) => {
    deleteProductCart({
      idCart: me,
      idProduct: p.Cart_Product.idProduct,
      ...e,
    });
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
    <form onSubmit={handleSubmit(submit)}>
      <input className="listCart__btnThird" type="submit" value="Delete" />
    </form>
  );
};

export default DeleteProductCart;
