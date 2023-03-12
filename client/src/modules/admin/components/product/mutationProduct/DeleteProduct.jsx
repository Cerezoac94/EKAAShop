import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../../../../redux/service/product.service";
import Swal from "sweetalert2";

const DeleteProduct = ({ product }) => {
	const data = useDeleteProductMutation();
	const navigate = useNavigate();
	console.log(data);
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
				<button onClick={() => handleDelete(category.id)}
					className="btn">
					Eliminar
				</button>
			</section>
		</section>
	);
};
export default DeleteProduct;
