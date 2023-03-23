import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grupo1">
        <div className="footer__box">
          <figure>
          <Link to="/" className="logo_link_home">
            <img src={logo} alt="logo_home" className="footer__logo" /> 
          </Link>
          </figure>
        </div>
        <div className="footer__box">
           <h2>Más información</h2> 
          <ul>
          <li className="footer__options">
											<Link to="/about_us" >Acerca de nosotros</Link>
										</li>
          <li className="footer__options">
											<Link to="/profile" >Perfil</Link>
										</li>
										<li className="footer__options">
											<Link to="/orders">Pedidos</Link>
										</li>
										<li className="footer__options">
											<Link to="/wish_list">Lista de deseos</Link>
										</li>
          </ul>
        </div>
        <div className="footer__box">
          <h2>Contactanos</h2>
          <hr />
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
