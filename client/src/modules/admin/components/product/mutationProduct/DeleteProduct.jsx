import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../../../../redux/service/product.service";
import Swal from "sweetalert2";

const DeleteProduct = ({ product }) => {
	const [deleteProduct, { error, data }] = useDeleteProductMutation();
	const navigate = useNavigate();
console.log('error',error);
console.log('data', data);

  const handleDelete = (id) => deleteProduct(id)

  useEffect(()=> {
    let timeout = null;
		if (data) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Product successfully removed",
				showConfirmButton: false,
				timer: 1000,
			});

			timeout = setTimeout(() => {
				navigate("/admin");
			}, 1200);
		}
		return () => clearTimeout(timeout);
  }, [data])

  useEffect(()=> {
		if (error) {
			Swal.fire({
				position: "top",
				icon: "error",
				title: "No product was removed",
        text: 'The product is already associated!',
				showConfirmButton: false,
				timer: 1300,
			});
		}
  }, [error])

	return (
		<section className="mutation__container">
			<h3 className="prop__title">Eliminar Producto</h3>
			<section>
				<section className="mutation__name">
					<li>{`Id: ${product?.id}`}</li>
					<li>{`Name: ${product?.name}`}</li>
				</section>
			</section>

			<section className="mutation__submit">
				<button onClick={() => handleDelete(product.id)}
					className="btn" title="Solo si el producto no existe en alguna orden o carrito">
					Eliminar
				</button>
			</section>
		</section>
	);
};
export default DeleteProduct;
