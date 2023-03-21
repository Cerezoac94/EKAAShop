import nodemailer from "nodemailer"
import "dotenv/config"

const user = process.env.MAILER_USER
const pass = process.env.MAILER_PASS

const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user, 
    pass 
  },
});

export default mailer