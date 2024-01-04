export const mapProducts = (products) =>
  products.slice(0, 4).map((product) => {
    const [amount, decimals = "00"] = product.price.toString().split(".");

    return {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount,
        decimals,
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
    };
  });
