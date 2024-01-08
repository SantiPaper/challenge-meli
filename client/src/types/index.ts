type Author = {
  name: string;
  lastname: string;
};

interface Item {
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

interface ItemWithDescription extends Item {
  description: string;
}

type Categories = Array<string>;

export type SearchResults = {
  author: Author;
  items: Array<Item>;
  categories: Categories;
};

export type ProductDetail = {
  author: Author;
  item: ItemWithDescription;
  categories: Categories;
};
