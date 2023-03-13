import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import admin from '../../assets/professional-woman.jpg'
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/esm/Container";

const UserLoginMenu = () => {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Header className="logged_user_menu_header">
                <Image src={admin} roundedCircle  className="user_menu_photo"/>
              <Container className="user_greeting">
              <label className="user_name_label"> Hello Sierra</label>
              <span className="role_span">Admin</span>
              </Container>
            </Popover.Header>
            <Popover.Body>
              <ul className="user_menu_links">
                <li className="user_menu_item"><Link to="/profile">Profile</Link></li>
                <hr/>
                <li className="user_menu_item"><Link to="/orders_list">Pending Orders</Link></li>
                <hr/>
                <li className="user_menu_item"><Link to="/">Wish List</Link></li>
                <hr/>
                <li className="user_menu_item"><Link to="/">My Orders</Link></li>
                <hr/>
                <li className="user_menu_item"><Link to="/">Log out</Link></li>
              </ul>
            </Popover.Body>
          </Popover>
        }
      >
        <Button className="user_menu_btn">
          <ion-icon name="person-outline" class="nav_icon"></ion-icon>
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default UserLoginMenu;
