import React from "react";
import Container from "react-bootstrap/Container";
import about_background from '../../assets/blob-scene-haikei_about.svg'
const About = () => {
  return (
    <Container fluid className="about_us_container">
      <h1>¡Bienvenidos a EKAAShop!</h1>
      <p className="about_text_para">
        En nuestra página web encontrarás una amplia selección de productos de
        alta calidad y a precios competitivos. Nos enorgullece ofrecer una
        variedad de productos que no solo son útiles en el día a día, sino que
        también son amigables con el medio ambiente. Nos esforzamos por ofrecer
        una experiencia de compra en línea sin problemas y estamos disponibles
        para ayudarte en cualquier momento. Nuestro equipo de servicio al
        cliente está aquí para responder a todas tus preguntas y garantizar que
        tengas una experiencia de compra satisfactoria. Estamos comprometidos
        con la satisfacción del cliente y queremos que disfrutes al máximo tus
        productos de acero térmicos, hieleras y accesorios. Gracias por
        elegirnos como tu proveedor de confianza y esperamos que encuentres lo
        que buscas en nuestra tienda en línea.
      </p>
    </Container>
  );
};

export default About;
