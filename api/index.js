import express from "express";
import axios from "axios";

const app = express();

const puerto = 3001;

const baseUrl = "https://api.mercadolibre.com";

const utilsAuthor = {
  name: "Santiago",
  lastname: "Vitelli",
};

app.get("/", async (req, res) => {
  const { q } = req.query;

  try {
    const { data } = await axios.get(`${baseUrl}/sites/MLA/search?q=${q}`);
    const categoryId = data.results[0].category_id;

    const { data: categories } = await axios.get(
      `${baseUrl}/categories/${categoryId}`
    );

    res.json({
      author: utilsAuthor,
      categories: categories.path_from_root.map((category) => category.name),
      items: [
        data.results.slice(0, 4).map((product) => ({
          id: product.id,
          title: product.title,
          price: {
            currency: product.currency_id,
            amount: product.price,

            decimals: product.price.toString().split("."),
          },
          picture: product.thumbnail,
          condition: product.condition,
          free_shipping: product.shipping.free_shipping,
        })),
      ],
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(puerto, () => {
  console.log(`Se esta escuchando en el puerto ${puerto}`);
});
