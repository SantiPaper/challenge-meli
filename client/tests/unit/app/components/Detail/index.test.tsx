import { screen, render } from "@testing-library/react";
import { Provider } from "../../../../../src/context";
import { BrowserRouter } from "react-router-dom";
import { Detail } from "../../../../../src/components/Detail";
import { mockProduct } from "./mocks";
import { server } from "../../../msw";
import { HttpResponse, http } from "msw";
describe("Detail component", () => {
  test("Renderiza el componente", () => {
    const { container } = render(
      <Provider>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test("Renderiza el detail", async () => {
    render(
      <Provider>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    );
    const cargando = screen.getByText("Cargando...");
    expect(cargando).toBeVisible();

    const firstTitle = await screen.findByRole("heading", {
      name: mockProduct.title,
    });
    expect(firstTitle).toBeVisible();
    expect(cargando).not.toBeInTheDocument();

    const img = await screen.findByAltText(mockProduct.title);
    expect(img).toBeVisible();

    const description = await screen.findByText(mockProduct.description);
    expect(description).toBeVisible();
  });

  test("Debería manejar un error correctamente", async () => {
    server.use(
      http.get("http://localhost:3001/api/items/:id", () => {
        return HttpResponse.json(
          {},
          {
            status: 500,
          }
        );
      })
    );
    render(
      <Provider>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    );
    const error = await screen.findByText("Error en el servidor");
    expect(error).toBeVisible();
  });
});
