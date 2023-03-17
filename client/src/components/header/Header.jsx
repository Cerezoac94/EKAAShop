import { Nav, Navbar, Offcanvas, Container, Button} from "react-bootstrap";
import logo from "../../assets/LOGO.svg";
import new_logo from "../../assets/new_logo.svg";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import Image from "react-bootstrap/esm/Image";
import { useMeQuery } from "../../redux/service/session.service";
// import CategoryContainer from "./Categories/CategoryContainer";

const Header = () => {
  const { data:results=[], isLoading, error } = useMeQuery()
  return isLoading ? ( <h3>Cargando...</h3> 
  ) : (
    <header>
      <Navbar expand="md" sticky="top">
        <Container fluid className="navbar_style">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Link to="/" className="logo_link_home">
            <Image src={new_logo} alt="logo_home" className="logo_home" />
          </Link>
           {!error ? 
           (<section className="user_actions_container_mobile">
          
          <Button href="/wish_list" className="user_menu_btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </Button>
            <Button href="/cart" className="user_menu_btn">
              <ion-icon name="cart-outline"></ion-icon>
            </Button>
            <UserMenu me={results.result} />
          </section>
          ): (
            <UserMenu/>
          )}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Link to="/">
                  <img src={logo} alt="logo_home" className="logo" />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
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
                {!error ? (
                <section className="user_actions_container_desktop">
                <Button href="/wish_list" className="user_menu_btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </Button>
                  <Button href="/cart" className="user_menu_btn">
                    <ion-icon name="cart-outline"></ion-icon>
                  </Button>
                   <UserMenu me={results.result}/>
                </section> 
                ): (
                  <UserMenu/>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
