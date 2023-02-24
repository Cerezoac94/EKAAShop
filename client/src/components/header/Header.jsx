import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/LOGO.svg";

const Header = () => {
  return (
    <header>
      <Navbar expand="xxl">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="logo_home"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#" className="mobile_nav_icons">
            <ion-icon name="cart-outline"></ion-icon>
          </Navbar.Brand>
          <Navbar.Brand href="#" className="mobile_nav_icons">
            <ion-icon name="person-outline"></ion-icon>
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
              <img
              src={logo}
              alt="logo_home"
              className="logo"
            />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" className="nav_menu_links">Drinkware</Nav.Link>
                <Nav.Link href="#action2" className="nav_menu_links">Coolers</Nav.Link>
                <Nav.Link href="#action2" className="nav_menu_links">Accesories</Nav.Link>
                <Nav.Link href="#action2" className="nav_menu_links">All Products</Nav.Link>
                <Nav.Link href="#action2" className="nav_menu_links">About US</Nav.Link>
                <Nav.Link href="#action2" className="nav_menu_links">Get help</Nav.Link>
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
