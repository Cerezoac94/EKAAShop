import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grupo1">
        <div className="footer__box">
          <figure>
            <img src={logo} alt="logo_home" className="footer__logo" />
          </figure>
        </div>
        <div className="footer__box">
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            quidem.
          </p>
        </div>
        <div className="footer__box">
          <h2>FOLLOW</h2>
          <div className="footer__redSocial">
            <Link to="/">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
            <Link to="/">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link to="/">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__grupo2">
        <small>
          {" "}
          &copy; 2023 <b>EkAAShop</b>-Todos los derechos reservados
        </small>
      </div>
    </footer>
  );
};
export default Footer;
