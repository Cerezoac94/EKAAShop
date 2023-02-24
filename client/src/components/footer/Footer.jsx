import { Link } from "react-router-dom"; 
const Footer = () => {
  return (
    /* TRANFORMAR A REACT SASS */
    <footer className="footer">

      <section className="footer_contact">
        <article className="footer_logo-box">
          <img src="#" alt="" />
          <h1>hola este es el footer</h1>
        </article>
        <article className="footer_social_media">
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

      <section className="footer_about">
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
