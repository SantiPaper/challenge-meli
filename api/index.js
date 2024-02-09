import express from "express";
import cors from "cors";
import { getProducts, getProductById } from "./controllers.js";

const app = express();
app.use(cors());

const puerto = 3001;

app.get("/api/items", getProducts);

app.get("/api/items/:productId", getProductById);

app.listen(puerto, () => {
  console.log(`Se esta escuchando en el puerto ${puerto}`);
});
