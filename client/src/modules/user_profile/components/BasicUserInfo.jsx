
import { useEffect } from "react";
import { useUpdateUserMutation } from "../../../redux/service/user.service";
import Container from "react-bootstrap/esm/Container";
import { Button, Form, InputGroup } from "react-bootstrap";
import StateMap from "../../admin/components/state/StateMap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ErrorForm from "../../../components/errors/ErrorForm";

const BasicUserInfo = ({ user }) => {
	const [update, { error, isSuccess }] = useUpdateUserMutation();
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const submit = (data) => update({ id: user.id, ...data });

useEffect(()=>{
  if(isSuccess) {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "User info successfully upgraded",
      showConfirmButton: false,
      timer: 1000,
    });
  }
},[isSuccess])

	useEffect(() => {
		reset(user);
    watch(user)
	}, [user, reset]);

	const errorMessages = {
		required: "Campo obligatorio",
		minLength: "Muy pocos caracteres",
		maxLength: "Demasiados caracteres",
		pattern: "Caracteres no válidos",
	};

	return (
		<>
			<Container className="basic_info_container">
				<Form.Group className="basic_info_header">
					<h2>Basic Info</h2>
					<Form.Text className="basic_info_text">
						Certain information may be visible to other people using the
						Services
					</Form.Text>
				</Form.Group>
				<Form.Group className="profile_info">
					<Form.Label className="input_label">First Name</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							{...register("firstName", {
								required: true,
								minLength: 3,
								maxLength: 100,
								pattern: /^[a-zA-Z\sáéíóúüñÁÉÍÓÚÜÑ]+$/,
							})}
							type="text"
							defaultValue={`${user.firstName}`}
							className="profile_input"
						/>
						{errors.firstName?.type && (
							<ErrorForm message={errorMessages[errors.firstName.type]} />
						)}
					</InputGroup>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Last Name</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							{...register("lastName", {
								required: true,
								minLength: 3,
								maxLength: 100,
								pattern: /^[a-zA-Z\sáéíóúüñÁÉÍÓÚÜÑ]+$/,
							})}
							type="text"
							defaultValue={`${user.lastName}`}
							className="profile_input"
						/>
						{errors.lastName?.type && (
							<ErrorForm message={errorMessages[errors.lastName.type]} />
						)}
					</InputGroup>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Email</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							{...register("email", {
								required: true,
								minLength: 8,
								maxLength: 120,
								pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							})}
							type="email"
							defaultValue={`${user.email}`}
							className="profile_input"
						/>
						{errors.email?.type && (
							<ErrorForm message={errorMessages[errors.email.type]} />
						)}
					</InputGroup>
				</Form.Group>

				{/* REVIEW: actualizar contraseña */}
				{/* <Form.Group className="profile_info">
					<Form.Label className="input_label">
						Password
					</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							type="password"
							defaultValue={"4"}
							className="profile_input"
						/>
					</InputGroup>
				</Form.Group> */}

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Birthday</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							{...register("birthday")}
							type="date"
							defaultValue={user.birthday ? `${user.birthday}` : ""}
							className="profile_input"
						/>
					</InputGroup>
				</Form.Group>

				<section className="profile_info">
					<Form.Label className="input_label">State</Form.Label>
					<select
						{...register("idState")}
						className="form-select select"
            id="state"
						title="Selecciona un estado"
						defaultValue={user?.State?.id}
					>
						<option value="">Selecciona un estado...</option>
						<StateMap select={1} />
					</select>
				</section>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Phone</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control {...register("phone", {
              pattern: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
            })}
							type="tel"
							inputMode="tel"
							placeholder="123-456-7890"
							defaultValue={user.phone ? `${user.phone}` : ""}
							className="profile_input"
						/>
            {errors.phone?.type && (
							<ErrorForm message={errorMessages[errors.phone.type]} />
						)}
					</InputGroup>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Direction</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control { ...register("adress", {
              minLength: 10,
              maxLength:100,
							pattern: /^[^<>'\"%&;()=+]*$/,
            })}type="text"
							defaultValue={user.adress ? `${user.adress}` : ""}
							className="profile_input"
							placeholder="Ingresa tú dirección"
						/>
            {errors.adress?.type && (
							<ErrorForm message={errorMessages[errors.adress.type]} />
						)}
					</InputGroup>
				</Form.Group>
			</Container>

			<section className="section_container">
				<Button
					onClick={handleSubmit(submit)}
					variant="primary"
					className="register_btn"
				>
					Actualizar
				</Button>
			</section>
		</>
	);
};

export default BasicUserInfo;

