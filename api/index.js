import express from "express";
import axios from "axios";

const app = express();

const puerto = 3001;

const baseUrl = "https://api.mercadolibre.com";

app.get("/", (req, res) => {
  const { q } = req.query;

  axios.get(`${baseUrl}/sites/MLA/search?q=${q}`).then(({ data }) => {
    res.json({
      data,
    });
  });
});

app.listen(puerto, () => {
  console.log(`Se esta escuchando en el puerto ${puerto}`);
});
