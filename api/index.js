import express from "express";
import axios from "axios";
import { mapProducts } from "./utils/functions.js";
import { author } from "./utils/variables.js";

const app = express();

const puerto = 3001;

const baseUrl = "https://api.mercadolibre.com";

app.get("/", async (req, res) => {
  const { q } = req.query;

  try {
    const { data } = await axios.get(`${baseUrl}/sites/MLA/search?q=${q}`);
    const categoryId = data.results[0].category_id;

    const { data: categories } = await axios.get(
      `${baseUrl}/categories/${categoryId}`
    );

    res.json({
      author,
      categories: categories.path_from_root.map((category) => category.name),
      items: mapProducts(data.results),
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(puerto, () => {
  console.log(`Se esta escuchando en el puerto ${puerto}`);
});
