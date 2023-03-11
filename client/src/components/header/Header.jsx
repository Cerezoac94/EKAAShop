import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import UserLoginMenu from "./UserLoginMenu";
import Image from "react-bootstrap/esm/Image";
import Search from "./Search";
// import CategoryContainer from "./Categories/CategoryContainer";

const Header = () => {
  return (
    <header>
      <Navbar expand="md" sticky="top">
        <Container fluid className="navbar_style">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Link to="/" className="logo_link_home">
            <Image src={logo} alt="logo_home" thumbnail="true" className="logo_home"/>
          </Link>
{/*           <section className="section_search_header_desktop" >
            <Search/>
          </section> */}
          <div className="user_actions_container">
            <Button href="/cart" className="user_menu_btn">
              <ion-icon name="cart-outline"></ion-icon>
            </Button>
            <UserMenu />
            {/* <UserLoginMenu /> */}
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img src={logo} alt="logo_home" className="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Link to="/all_products" className="nav_menu_links">
                  All Products
                </Link>

                <Link to='/drinkware' className="nav_menu_links">
                  Drinkware
                </Link>
                <Link to='/cooler' className="nav_menu_links">
                  Cooler
                </Link>
                <Link to='/accessories' className="nav_menu_links">
                  Accessories
                </Link>
                <Link to="/get_help" className="nav_menu_links">
                  Get help
                </Link>
                <Link to="/login" className="nav_menu_links login_link">
                  login / register
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
{/* <section className="section_search_header">
  <Search/>
</section> */}
      </Navbar>
    </header>
  );
};
export default Header;
