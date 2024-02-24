import { HttpResponse, http } from "msw";
import { mockCategories, mockProds } from "../app/components/Results/mocks";

export const handlers = [
  http.get("http://localhost:3001/api/items", () => {
    return HttpResponse.json({
      items: mockProds,
      categories: mockCategories,
    });
  }),
];
