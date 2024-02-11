export type Author = {
  name: string;
  lastname: string;
};

export interface Product {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: string;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface ItemWithDescription extends Product {
  description: string;
}

export type Categories = Array<string>;

export type SearchResults = {
  author: Author;
  items: Array<Product>;
  categories: Categories;
};

export type ProductDetail = {
  author: Author;
  item: ItemWithDescription;
  categories: Categories;
};
