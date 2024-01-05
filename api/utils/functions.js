export const getPrice = (product) => {
  const [amount, decimals = "00"] = product.price.toString().split(".");
  return {
    currency: product.currency_id,
    amount,
    decimals,
  };
};

export const mapProducts = (products) =>
  products.slice(0, 4).map((product) => ({
    id: product.id,
    title: product.title,
    price: getPrice(product),
    picture: product.thumbnail,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
  }));

export const extractPropertiesFromProduct = (
  infoProduct,
  descriptionProduct
) => ({
  id: infoProduct.id,
  title: infoProduct.title,
  price: getPrice(infoProduct),
  picture: infoProduct.thumbnail,
  condition: infoProduct.condition,
  free_shipping: infoProduct.shipping.free_shipping,
  description: descriptionProduct.plain_text || "No contiene descripcion",
});
