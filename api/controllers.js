import axios from "axios";
import {
  mapProducts,
  extractPropertiesFromProduct,
} from "./utils/functions.js";
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

export const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const [infoProduct, descriptionProduct] = await Promise.all([
      axios.get(`${baseUrl}/items/${productId}`),
      axios.get(`${baseUrl}/items/${productId}/description`),
    ]);

    const { data: categories } = await axios.get(
      `${baseUrl}/categories/${infoProduct.category_id}`
    );

    res.json({
      author,
      item: extractPropertiesFromProduct(infoProduct, descriptionProduct),
      categories: categories.path_from_root.map((category) => category.name),
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
