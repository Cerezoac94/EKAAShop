import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryMap from "../../category/CategoryMap";
import { useUpdateProductMutation } from "../../../../../redux/service/product.service";
import { useForm } from "react-hook-form";
import ErrorForm from "../../../../../components/errors/ErrorForm";
import Swal from "sweetalert2";

const UpdateProduct = ({ product }) => {
	const [update, { error, data }] = useUpdateProductMutation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submit = (data) => update({ id: product.id, ...data });
	const navigate = useNavigate();

	// console.log(product)
	useEffect(() => {
		if (data) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Product successfully upgraded",
				showConfirmButton: false,
				timer: 1000,
			});
			setTimeout(() => {
				navigate("/admin");
			}, 1200);
		}
	}, [data]);

	useEffect(() => {
		reset(product);
	}, [product, reset]);

	return (
		<section className="mutation__container">
			<h3 className="prop__title">Actualizar Producto</h3>
			<form onSubmit={handleSubmit(submit)} className="formAdminProduct">
				<section className="form-group">
					<label>Nombre:</label>
					<input
						{...register("name", {
							required: true,
							minLength: 3,
							maxLength: 100,
							pattern: /^[a-zA-Z0-9\sáéíóúüñÁÉÍÓÚÜÑ,.]+$/,
						})}
						type="text"
						className="form-control"
						defaultValue={product.name}
					/>
					{errors.name?.type === "required" && (
						<ErrorForm message={"Campo obligatorio"} />
					)}
					{errors.name?.type === "minLength" && (
						<ErrorForm message={"Mínimo 3 caracteres"} />
					)}
					{errors.name?.type === "maxLength" && (
						<ErrorForm message={"Demasiados caracteres"} />
					)}
					{errors.name?.type === "pattern" && (
						<ErrorForm
							message={
								"Solo números y letras y no más de un espacio entre palabra"
							}
						/>
					)}
				</section>
				<div className="form-group">
					<label>Descripción:</label>
					<input
						{...register("description", {
							required: true,
							minLength: 15,
							pattern: /^[^<>'\"%&;()=+]*$/,
						})}
						type="text"
						className="form-control"
						defaultValue={product.description}
					/>
					{errors.description?.type === "required" && (
						<ErrorForm message={"Campo obligatorio"} />
					)}
					{errors.description?.type === "minLength" && (
						<ErrorForm message={"Descripcitón demasiado corta"} />
					)}
					{errors.description?.type === "pattern" && (
						<ErrorForm message={"Caracteres no validos"} />
					)}
				</div>
				<div className="form-group">
					<label>Precio:</label>
					<input
						{...register("price", {
							required: true,
							pattern: /^[0-9]+(?:\.[0-9]+)?$/,
						})}
						type="text"
						className="form-control"
						defaultValue={product.price}
					/>
					{errors.price?.type === "required" && (
						<ErrorForm message={"Campo obligatorio"} />
					)}
					{errors.price?.type === "pattern" && (
						<ErrorForm message={"Solo caracteres númericos"} />
					)}
				</div>

				<div className="form-group">
					<label>Stock:</label>
					<input
						{...register("stock", {
							required: true,
							pattern: /^[0-9]+$/,
						})}
						type="text"
						className="form-control"
						defaultValue={product.stock}
					/>
					{errors.stock?.type === "required" && (
						<ErrorForm message={"Campo obligatorio"} />
					)}
					{errors.stock?.type === "pattern" && (
						<ErrorForm message={"Solo caracteres númericos"} />
					)}
				</div>

				{/*cuando se implemente firebase
           <div className="form-group">
            <label>Imagen:</label>
            <input type="file"  className="form-control" />
          </div> */}
				<div className="form-group">
					<label>Imagen url:</label>
					<input
						{...register("image", {
							required: true,
						})}
						type="text"
						className="form-control"
						defaultValue={product.image}
					/>
					{errors.image?.type === "required" && (
						<ErrorForm message={"Campo obligatorio"} />
					)}
				</div>
				<section className="form-group">
					<label>Category:</label>
					<select
						{...register("idCategory", {
							required: true,
						})}
						className="form-select"
						id="category"
						title="Selecciona una categoría"
						defaultValue={product.Category.id}
					>
						<option>Selecciona una categoría</option>
						<CategoryMap select={1} />
					</select>
					{errors.idCategory?.type === "required" && (
						<ErrorForm message={"Campo obligatorio"} />
					)}
				</section>
				<section className="mutation__submit">
					<button className="mutation__updateBtn">Actualizar</button>
				</section>
			</form>
		</section>
	);
};
export default UpdateProduct;
