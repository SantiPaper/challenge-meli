import express from "express";
import { getProducts } from "./controllers.js";

const app = express();

const puerto = 3001;

app.get("/api/items", getProducts);

app.listen(puerto, () => {
  console.log(`Se esta escuchando en el puerto ${puerto}`);
});
