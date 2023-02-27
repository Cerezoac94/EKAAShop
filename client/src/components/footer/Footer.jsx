import { Link } from "react-router-dom"; 
import logo from "../../assets/LOGO.svg";
const Footer = () => {
  return (
    /* TRANFORMAR A REACT SASS */
    <footer className="footer">
      <section className="footer__contact">
        <article className="footer__logo-box">
        <img
              src={logo}
              alt="logo_home"
              className="logo"
            />
         
        </article>
        <article className="footer__socialmedia">
          <Link to="/"> 
            <ion-icon name="logo-facebook"></ion-icon>{" "}
          </Link>
          <Link to="/">
            <ion-icon name="logo-instagram"></ion-icon>{" "}
          </Link>
          <Link to="/">
            <ion-icon name="logo-instagram"></ion-icon>{" "}
          </Link>
        </article>
      </section>

      <section className="footer__about">
        <article>
          <span>My account</span>
          <span>  Wish List</span>
          <span>Recent view</span>
          <span>Return</span>
        </article>
        <article>
          <span>My Orders</span>
          <span>Buy Again</span>
          <span>Contact Us</span>
          <span>Payment Policy</span>
        </article>
      </section>
    </footer>

  );
};
export default Footer;
