import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container'
//import logo from "../../assets/LOGO.svg";
import bg_mobile from "../../assets/low-poly-grid-haikei_desktop.svg"

const Register = () => {
  return (
    <Container fluid  style={{backgroundImage: `url(${bg_mobile})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}className="register_form_container">
    <Form className="register_form">
      <Form.Group className="register_form_header">
      <Form.Label className="register_header_title">Welcome to EKAAShop</Form.Label>
      <Form.Label className="register_header_legend">Create your account by filling the form below</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="User name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
        <ion-icon name="information-circle-outline" class="info_circle"></ion-icon>
          Wrong password
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="register_btn">
        register
      </Button>
      <label className="register_footer">Already have an account? Sign in here</label>
      <Form.Group className="register_footer_container">
        <Form.Text className="register_footer_label">Or Sign Up using </Form.Text>
        <Container fluid className="register_footer_icons_container">
        <ion-icon name="logo-google" class="register_footer_icons"></ion-icon>
        <ion-icon name="logo-facebook" class="register_footer_icons"></ion-icon>
        <ion-icon name="logo-twitter" class="register_footer_icons"></ion-icon>
        </Container>
      </Form.Group>
    </Form>
  </Container>
  )
}

export default Register