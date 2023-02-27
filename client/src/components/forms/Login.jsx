import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
//import logo from "../../assets/LOGO.svg";
import bg_mobile from "../../assets/low-poly-grid-haikei_desktop.svg"

const Login = () => {
  return (
    <Container fluid  style={{backgroundImage: `url(${bg_mobile})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}className="login_form_container">
      <Form className="login_form">
        <Form.Group className="login_form_header">
        <Form.Label className="login_header_title">Login</Form.Label>
        <Form.Label className="login_header_legend">Enter your credentials</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">
          <ion-icon name="information-circle-outline" className="info_circle"></ion-icon>
            Wrong password
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="login_btn">
          Login
        </Button>
        <label className="login_footer">Forgotten your password? Reset password</label>
        <label className="login_footer">Don't have an account? Register here</label>
      </Form>
    </Container>
  );
};

export default Login;

/* 
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
*/