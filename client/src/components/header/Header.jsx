// import CategoryContainer from "./Categories/CategoryContainer";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import UserMenu from "./UserMenu";
import logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <section className="header__logo">
          <img src={logo} alt="header__img" />
        </section>

        <section className="header__menu">
          <div className="header__nav">
            {/* <nav className="header__navcontainer">
              <Link to="/all_products" className="header__link">
                All Products
              </Link>

              <Link to="/drinkware" className="header__link">
                Drinkware
              </Link>
              <Link to="/cooler" className="header__link">
                Cooler
              </Link>
              <Link to="/accessories" className="header__link">
                Accessories
              </Link>
              <Link to="/get_help" className="header__link">
                Get help
              </Link>
              <Link to="/login">login / register</Link>
            </nav> */}
            <Navbar expand="md" sticky="top" collapseOnSelect={false}>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    <img src={logo} alt="logo_home" className="logo" />
                    <Offcanvas.Body>
                      <Nav>
                        <Link to="/all_products" className="nav_menu_links">
                          All Products
                        </Link>

                        <Link to="/drinkware" className="nav_menu_links">
                          Drinkware
                        </Link>
                        <Link to="/cooler" className="nav_menu_links">
                          Cooler
                        </Link>
                        <Link to="/accessories" className="nav_menu_links">
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
                  </Offcanvas.Title>
                </Offcanvas.Header>
              </Navbar.Offcanvas>
            </Navbar>
          </div>
        </section>

        <section className="header__cart/login">
          <Button href="/cart" className="user_menu_btn">
            <ion-icon name="cart-outline"></ion-icon>
          </Button>
          <UserMenu />
          {/* <UserLoginMenu /> */}
        </section>
      </section>
    </header>
  );
};
export default Header;
