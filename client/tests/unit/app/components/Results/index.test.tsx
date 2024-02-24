import { render, screen } from "@testing-library/react";
import { Results } from "../../../../../src/components/Results";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "../../../../../src/context";

describe("Componente Results", () => {
  test("Renderiza el componente", () => {
    const { container } = render(
      <Provider>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("Renderizan los productos", async () => {
    render(
      <Provider>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </Provider>
    );
    const cargando = screen.getByText("Cargando...");
    expect(cargando).toBeVisible();

    const firstTitle = await screen.findByRole("heading", {
      name: "Producto Genérico 1",
    });
    expect(firstTitle).toBeVisible();
    expect(cargando).not.toBeInTheDocument();

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(4);
  });
});

// window.fetch = vi.fn();
/* vi.spyOn(window, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockProds),
  });
}); */
/* vi.spyOn(window, "fetch").mockResolvedValue({
  json: () => Promise.resolve(mockProds),
}); */
