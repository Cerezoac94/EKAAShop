import mailer from "../../config/mailer.js"
import "dotenv/config"

const mailer_user = process.env.MAILER_USER

const newAccount = async ( email, userName ) => {
  await mailer.sendMail({
    from: `"EKAAShop 🥤" ${mailer_user}`, 
    to: `${email}`, 
    subject: `Hola, ${userName}, ¡Bienvenido a nuestra tienda EKAAShop!`,
    // text: "Hello world?", 
    html:`<html>
    <head>
      <title>Bienvenido a nuestro Ecommerce</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          width: 100%;
          background-color: #f2f2f2;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: #333;
          padding: 20px;
          margin: 0;
          display:block;
          text-align:center;
        }
        main {
          width: 80%;
          background-color: #d3f0f4;
          border-radius: 10px;
        }
  
        h1,
        h2,
        p {
          margin-top: 0;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 28px;
          font-weight: bold;
          color: #333;
        }
        h2 {
          font-size: 22px;
          font-weight: bold;
          color: #333;
        }
        .title {
          text-align: center;
          padding: 10px;
          margin-bottom: 10px;
          background-color: #3c99ba;
          border-radius: 10px;
        }
        p {
          font-size: 16px;
          color: #333;
        }
        .container {
          padding: 10px;
        }
        span {
          font-weight: bold;
          color: #224f63;
        }
      </style>
    </head>
    <body>
      <main>
        <section class="title">
          <h1>Gracias por suscribirte a nuestro Ecommerce EKAAShop</h1>
          <h2>¡Esperamos que disfrutes de tu experiencia de compra!</h2>
        </section>
        <section class="container">
          <p>Estimado(a) <span>${userName}</span>,</p>
          <p>
            En nombre de todo el equipo de EKAAShop, me complace darte la
            bienvenida a nuestro Ecommerce. Estamos emocionados de tenerte como
            nuevo miembro de nuestra familia virtual y esperamos que disfrutes de
            la experiencia de compra en línea que ofrecemos.
          </p>
          <p>
            En nuestra tienda en línea, encontrarás una amplia variedad de vasos,
            hieleras, y accesorios para estos, de alta calidad a precios
            competitivos.
          </p>
          <p>
            No dudes en explorar nuestra tienda en línea y descubrir todas las
            opciones que tenemos disponibles para ti.
          </p>
          <p>Saludos cordiales,</p>
          <p>El equipo de <span>EKAAShop</span></p>
        </section>
      </main>
    </body>
  </html>
        `
  })
}

export default newAccount

