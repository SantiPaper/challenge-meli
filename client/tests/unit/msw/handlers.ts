import { HttpResponse, http } from "msw";
import { mockCategories, mockProds } from "../app/components/Results/mocks";
import { mockProduct } from "../app/components/Detail/mocks";

export const handlers = [
  http.get("http://localhost:3001/api/items", () => {
    return HttpResponse.json({
      items: mockProds,
      categories: mockCategories,
    });
  }),
  http.get("http://localhost:3001/api/items/:id", () => {
    return HttpResponse.json({
      item: mockProduct,
      categories: mockCategories,
    });
  }),
];
