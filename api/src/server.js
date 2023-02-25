import express from "express";
import morgan from "morgan";
import "dotenv/config";
import conn from "./db/db.js";
import routes from "./routes/index.js";

const port = process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/api", routes);

await conn.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("Server UP");
  });
});
f