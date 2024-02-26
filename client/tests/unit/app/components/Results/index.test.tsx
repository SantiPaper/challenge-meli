import { render, screen } from "@testing-library/react";
import { Results } from "../../../../../src/components/Results";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "../../../../../src/context";
import { server } from "../../../msw";
import { HttpResponse, http } from "msw";

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
  test("Debería manejar un error correctamente", async () => {
    server.use(
      http.get("http://localhost:3001/api/items", () => {
        return HttpResponse.json(
          {},
          {
            status: 404,
          }
        );
      })
    );

    render(
      <Provider>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </Provider>
    );

    const error = await screen.findByAltText("error_img");
    expect(error).toBeVisible();
  });
});
