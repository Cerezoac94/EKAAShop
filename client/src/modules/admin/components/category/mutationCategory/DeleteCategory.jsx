import { useDeleteCategoryMutation } from "../../../../../redux/service/category.service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const DeleteCategory = ({ category }) => {
	const [deleteCategory, { error, data }] = useDeleteCategoryMutation();
	const navigate = useNavigate();
  
	const handleDelete = (id) => deleteCategory(id);

	useEffect(() => {
		let timeout = null;
		if (data) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Category successfully removed",
				showConfirmButton: false,
				timer: 1000,
			});

			timeout = setTimeout(() => {
				navigate("/admin");
			}, 1200);
		}
		return () => clearTimeout(timeout);
	}, [data]);

	return (
		<section className="mutation__container">
			<h3 className="prop__title">Eliminar Categoría</h3>
			<section>
				<section className="mutation__name">
					<label className="mutation__categoryLabel">{category?.name}</label>
				</section>
			</section>

			<section className="mutation__submit">
				<button onClick={() => handleDelete(category.id)}className="mutation__deleteBtn">
					Eliminar
				</button>
			</section>
		</section>
	);
};
export default DeleteCategory;
