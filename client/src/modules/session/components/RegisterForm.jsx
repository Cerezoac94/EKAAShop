import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
//import logo from "../../assets/LOGO.svg";
import bg_mobile from "../../../assets/low-poly-grid-haikei_desktop.svg";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../../redux/service/user.service";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [create, { error, data }] = useCreateUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = (data) => create(data);
  useEffect(() => {
    if (data) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Successful registration",
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        navigate("/");
      }, 1200);
    }
  }, [data]);

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${bg_mobile})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="session_form_container"
    >
      <Form onSubmit={handleSubmit(submit)} className="session_form">
        <Form.Group className="session_form_header">
          <Form.Label className="session_header_title register_header">
            Welcome to EKAAShop
          </Form.Label>
          <Form.Label className="session_header_legend">
            Create your account by filling the form below
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicUser">
          <Form.Control
            {...register("userName", {
              required: true,
              minLength: 6,
              maxLength: 100,
              pattern: /^[a-zA-Z0-9_]*$/,
            })}
            type="text"
            placeholder="User name"
          />
          {errors.userName?.type === "required" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Campo requerido
            </Form.Text>
          )}
          {errors.userName?.type === "minLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Mínimo 6 caracteres
            </Form.Text>
          )}
          {errors.userName?.type === "maxLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Demasiados caracteres, intenta un nombre de usuario más corto
            </Form.Text>
          )}
          {errors.userName?.type === "pattern" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Caracteres no válidos
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Control
            {...register("firstName", {
              required: true,
              minLength: 3,
              maxLength: 100,
              pattern: /^[a-zA-Z0-9_]*$/,
            })}
            type="text"
            placeholder="First name"
          />
          {errors.firstName?.type === "required" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Campo requerido
            </Form.Text>
          )}
          {errors.firstName?.type === "minLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Mínimo 3 caracteres
            </Form.Text>
          )}
          {errors.firstName?.type === "maxLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Demasiados caracteres
            </Form.Text>
          )}
          {errors.firstName?.type === "pattern" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Caracteres no válidos
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicLastName">
          <Form.Control
            {...register("lastName", {
              required: true,
              minLength: 3,
              maxLength: 100,
              pattern: /^[a-zA-Z0-9_]*$/,
            })}
            type="text"
            placeholder="Last name"
          />
          {errors.lastName?.type === "required" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Campo requerido
            </Form.Text>
          )}
          {errors.lastName?.type === "minLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Mínimo 3 caracteres
            </Form.Text>
          )}
          {errors.lastName?.type === "maxLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Demasiados caracteres
            </Form.Text>
          )}
          {errors.lastName?.type === "pattern" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Caracteres no válidos
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control
            {...register("email", {
              required: true,
              minLength: 8,
              maxLength: 120,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            type="text"
            placeholder="Enter email"
          />
          {errors.email?.type === "required" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Campo requerido
            </Form.Text>
          )}
          {errors.email?.type === "minLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Mínimo 8 caracteres
            </Form.Text>
          )}
          {errors.email?.type === "maxLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Demasiados caracteres, intenta un email más corto
            </Form.Text>
          )}
          {errors.email?.type === "pattern" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Correo no válido
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Control
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 100,
              pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Za-z]).{8,}$/,
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Campo requerido
            </Form.Text>
          )}
          {errors.password?.type === "minLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Mínimo 8 caracteres
            </Form.Text>
          )}
          {errors.password?.type === "maxLength" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Demasiados caracteres
            </Form.Text>
          )}
          {errors.password?.type === "pattern" && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              Al menos un simbolo en tu contraseña
            </Form.Text>
          )}
        </Form.Group>
        <Button variant="primary" type="submit" className="session_btn">
          register
        </Button>

        <label className="session_footer">
          Already have an account?  
          <Link to="/login" className="to_session">
            <span> Sign in here!</span>
          </Link>
        </label>

        <Form.Group className="session_footer_container">
          {error && (
            <Form.Text className="text-muted">
              <ion-icon
                name="information-circle-outline"
                className="info_circle"
              ></ion-icon>
              {error.data.message.length != 0 &&
                `${error?.data?.message?.errors[0]?.path} no disponible`}
            </Form.Text>
          )}
        </Form.Group>
      </Form>
    </Container>
  );
};

export default RegisterForm;
