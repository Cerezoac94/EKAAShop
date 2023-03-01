import { Link } from "react-router-dom"; 
import logo from "../../assets/LOGO.svg";
import Container from "react-bootstrap/Container";
const Footer = () => {
  return (
    /* TRANFORMAR A REACT SASS */
    <Container fluid >
    <footer className="footer">
       
      <section className="footer__contact">
        <article className="footer__logoBox">
        <img
              src={logo}
              alt="logo_home"
              className="footer__logo"
            />
         
        </article>
        <article className="footer__socialMedia">
          <Link to="/" > 
            <ion-icon className="footer__icon" name="logo-facebook"></ion-icon>{" "}
          </Link>
          <Link to="/">
            <ion-icon className="footer__icon"  name="logo-instagram"></ion-icon>{" "}
          </Link>
          <Link to="/" >
            <ion-icon className="footer__icon"  name="logo-instagram"></ion-icon>{" "}
          </Link>
        </article>
      </section>

      <section className="footer__about">
        <article className="footer__list">
          <span>My account</span>
          <span>  Wish List</span>
          <span>Recent view</span>
          <span>Return</span>
        </article>
        <article className="footer__list2">
          <span>My Orders</span>
          <span>Buy Again</span>
          <span>Contact Us</span>
          <span>Payment Policy</span>
        </article>
      </section>
   
    </footer>
    </Container>
   

  );
};
export default Footer;
