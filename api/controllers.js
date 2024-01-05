import axios from "axios";
import { mapProducts } from "./utils/functions.js";
import { author } from "./utils/variables.js";

const baseUrl = "https://api.mercadolibre.com";

export const getProducts = async (req, res) => {
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
};
