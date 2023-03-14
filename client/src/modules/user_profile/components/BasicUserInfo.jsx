import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { User } from "./user_info";
const BasicUserInfo = () => {
    const data = User;
  return (
          <Container className="basic_info_container">
        <Form.Group className="basic_info_header">
        <h2 className='basic_label'>Basic Info</h2>
        <Form.Text className="basic_info_text">Certain information may be visible to other people using the Services</Form.Text>
        </Form.Group>
      <Form.Group className="profile_info">
        <Form.Label htmlFor="user_name" className="input_label">Photo</Form.Label>
        <InputGroup className="mb-3 profile_input_group">
        <Form.Control type="text" value={data.name} className="profile_input" />
          <Button variant="outline-secondary" id="button-addon2" className="edit_btn">
            <ion-icon name="create-outline"></ion-icon>
          </Button>
        </InputGroup>
      </Form.Group>
      
      {/* Name */}
      <Form.Group className="profile_info">
        <Form.Label htmlFor="user_name" className="input_label">Name</Form.Label>
        <InputGroup className="mb-3 profile_input_group">
        <Form.Control type="text" value={data.name} className="profile_input" />
          <Button variant="outline-secondary" id="button-addon2" className="edit_btn">
            <ion-icon name="create-outline"></ion-icon>
          </Button>
        </InputGroup>
      </Form.Group>

      {/* email */}
      <Form.Group className="profile_info">
        <Form.Label htmlFor="user_name" className="input_label">Email</Form.Label>
        <InputGroup className="mb-3 profile_input_group">
        <Form.Control type="email" value={data.email} className="profile_input" />
          <Button variant="outline-secondary" id="button-addon2" className="edit_btn">
            <ion-icon name="create-outline"></ion-icon>
          </Button>
        </InputGroup>
      </Form.Group>

      {/* Password */}
      <Form.Group className="profile_info">
        <Form.Label htmlFor="user_name" className="input_label">Password</Form.Label>
        <InputGroup className="mb-3 profile_input_group">
        <Form.Control type="password" value={data.password} className="profile_input" />
          <Button variant="outline-secondary" id="button-addon2" className="edit_btn">
            <ion-icon name="create-outline"></ion-icon>
          </Button>
        </InputGroup>
      </Form.Group>

      {/* Birthday */}
      <Form.Group className="profile_info">
        <Form.Label htmlFor="user_name" className="input_label">Birthday</Form.Label>
        <InputGroup className="mb-3 profile_input_group">
        <Form.Control type="text" value={data.birthday} className="profile_input" />
          <Button variant="outline-secondary" id="button-addon2" className="edit_btn">
            <ion-icon name="create-outline"></ion-icon>
          </Button>
        </InputGroup>
      </Form.Group>

      {/* Gender */}
      <Form.Group className="profile_info">
        <Form.Label htmlFor="user_name" className="input_label">Gender</Form.Label>
        <InputGroup className="mb-3 profile_input_group">
        <Form.Control type="text" value={data.gender} className="profile_input" />
          <Button variant="outline-secondary" id="button-addon2" className="edit_btn">
            <ion-icon name="create-outline"></ion-icon>
          </Button>
        </InputGroup>
      </Form.Group>
      </Container>
  )
}

export default BasicUserInfo