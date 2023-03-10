import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
//import logo from "../../assets/LOGO.svg";
import bg_mobile from "../../../assets/low-poly-grid-haikei_desktop.svg"
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/service/session.service";


const LoginForm = () => {
  const [login, { error, data } ] = useLoginMutation()
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = (data) => login(data);

  useEffect(() => {
    if (data) navigate("/");
  }, [data]);

  return (
    <Container fluid  style={{backgroundImage: `url(${bg_mobile})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}className="login_form_container">
      <Form onSubmit={handleSubmit(submit)} className="login_form">
        <Form.Group className="login_form_header">
        <Form.Label className="login_header_title">Login</Form.Label>
        <Form.Label className="login_header_legend">Enter your credentials</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username or email</Form.Label>
          <Form.Control {...register("userEmail", {
          required: true,
           minLength: 6,
           maxLength: 120
           })} type="text" placeholder="Username or email" />
          {errors.userEmail?.type === 'required' && <Form.Text className="text-muted">
          <ion-icon name="information-circle-outline" className="info_circle"></ion-icon>
            Campo obligatorio
          </Form.Text>}
          {errors.userEmail?.type === "minLength" && <Form.Text className="text-muted">
          <ion-icon name="information-circle-outline" className="info_circle"></ion-icon>
            Mínimo 6 caracteres
          </Form.Text>}
          {errors.userEmail?.type === "maxLength" && <Form.Text className="text-muted">
          <ion-icon name="information-circle-outline" className="info_circle"></ion-icon>
            Usuario o email demasiado largo
          </Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password", {
            required: true,
            minLength: 8,
          })} type="password" placeholder="Password" />
          {errors.password?.type === "required" && <Form.Text className="text-muted">
          <ion-icon name="information-circle-outline" className="info_circle"></ion-icon>
            Ingresa una contraseña
          </Form.Text>}
          {errors.password?.type === "minLength" && <Form.Text className="text-muted">
          <ion-icon name="information-circle-outline" className="info_circle"></ion-icon>
           Mínimo 8 caracteres
          </Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit" className="login_btn">
          Login
        </Button>
        {/* <label className="login_footer">Forgotten your password? Reset password</label> */}
        <label className="login_footer">Don't have an account? Register here</label>
        {error && <Form.Text className="text-muted">
          <ion-icon name="information-circle-outline" className="info_circle"></ion-icon>
            {error.data.message}
          </Form.Text>}
      </Form>
    </Container>
  );
};

export default LoginForm;

/* 
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
*/