import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar expand="md"  sticky="top">
        <Container fluid className="navbar_style">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Brand href="/">
            <img src={logo} alt="logo_home" className="logo" />
          </Navbar.Brand>
          <div className="navbar_icons">
          <Link to="/cart" className="mobile_nav_icons">
            <ion-icon name="cart-outline" class="nav_icon"></ion-icon>
          </Link>
          <Link to="/user_profile" className="mobile_nav_icons">
            <ion-icon name="person-outline" class="nav_icon"></ion-icon>
          </Link>
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/drinkware" className="nav_menu_links">
                  Drinkware
                </Link>
                <Link to="/coolers" className="nav_menu_links">
                  Coolers
                </Link>
                <Link to="/Accesories" className="nav_menu_links">
                  Accesories
                </Link>
                <Link to="/aal_products" className="nav_menu_links">
                  All Products
                </Link>
                <Link to="/about_us" className="nav_menu_links">
                  About US
                </Link>
                <Link to="/get_help" className="nav_menu_links">
                  Get help
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <section className="section_search_header">
        <input
          type="search"
          placeholder="Search"
          className="search_header_container"
          aria-label="Search"
        />
      </section>
    </header>
  );
};
export default Header;
