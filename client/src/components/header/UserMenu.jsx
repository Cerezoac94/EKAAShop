import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Header className="user_menu_header">
              <Button href="/login" className="user_menu_login_btn">
                Login
              </Button>
              <label>
                New Client?
                <a href="/register" className="user_menu_register">
                  Click here!
                </a>
              </label>
            </Popover.Header>
            <Popover.Body>
              <ul className="user_menu_links">
              <li className="user_menu_item"><Link to="/profile">Profile</Link></li>
                <li className="user_menu_item"><Link to="/orders_list">Pending Orders</Link></li>
                <li className="user_menu_item"><Link to="/wish_list">Wish List</Link></li>
                <li className="user_menu_item"><Link to="/">My Orders</Link></li>
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

export default UserMenu;
