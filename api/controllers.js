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
    res.sendStatus(404);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    const [infoProductResponse, descriptionProductResponse] = await Promise.all(
      [
        axios.get(`${baseUrl}/items/${productId}`),
        axios.get(`${baseUrl}/items/${productId}/description`),
      ]
    );

    const infoProduct = infoProductResponse.data;
    const descriptionProduct = descriptionProductResponse.data;

    const categoriesResponse = await axios.get(
      `${baseUrl}/categories/${infoProduct.category_id}`
    );

    const categories = categoriesResponse.data.path_from_root.map(
      (category) => category.name
    );

    res.json({
      author,
      item: extractPropertiesFromProduct(infoProduct, descriptionProduct),
      categories,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
