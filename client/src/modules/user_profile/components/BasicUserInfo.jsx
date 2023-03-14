import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import StateMap from "../../admin/components/state/StateMap";

const BasicUserInfo = ({ data }) => {
	console.log(data);
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
							type="text"
							defaultValue={`${data.firstName}`}
							className="profile_input"
						/>
					</InputGroup>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Last Name</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							type="text"
							defaultValue={`${data.lastName}`}
							className="profile_input"
						/>
					</InputGroup>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Email</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							type="email"
							defaultValue={`${data.email}`}
							className="profile_input"
						/>
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
							type="text"
							defaultValue={data.birthday ? `${data.birthday}` : ""}
							className="profile_input"
							placeholder="yyyy-mm-dd"
						/>
					</InputGroup>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">State</Form.Label>
					<select
						className="form-select select"
						id="state"
						title="Selecciona un estado"
						defaultValue={data.State ? `${data.State.id}` : ""}
					>
						<option>
							Selecciona un estado...
						</option>
						<StateMap select={1} />
					</select>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Phone</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							type="tel"
							inputMode="tel"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							placeholder="123-456-7890"
							defaultValue={data.phone ? `${data.phone}` : ""}
							className="profile_input"
						/>
					</InputGroup>
				</Form.Group>

				<Form.Group className="profile_info">
					<Form.Label className="input_label">Direction</Form.Label>
					<InputGroup className="mb-3 profile_input_group">
						<Form.Control
							type="text"
							defaultValue={data.adress ? `${data.adress}` : ""}
							className="profile_input"
							placeholder="Ingresa tú dirección"
						/>
					</InputGroup>
				</Form.Group>
			</Container>

			<section className="section_container">
				<Button variant="primary" type="submit" className="register_btn">
					Actualizar
				</Button>
			</section>
		</>
	);
};

export default BasicUserInfo;
