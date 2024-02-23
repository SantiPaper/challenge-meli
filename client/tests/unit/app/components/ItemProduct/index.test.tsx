import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter desde react-router-dom
import { mockedProduct } from "./__mocks__";
import { ItemProduct } from "../../../../../src/components/ItemProduct";
import { Provider } from "../../../../../src/context";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Provider>
        <ItemProduct
          condition={mockedProduct.condition}
          id={mockedProduct.id}
          img={mockedProduct.img}
          price={mockedProduct.price}
          shipping={mockedProduct.shipping}
          title={mockedProduct.title}
          key={mockedProduct.id}
        />
      </Provider>
    </BrowserRouter>
  );
});

describe("ItemProduct", () => {
  test("Renderiza bien", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider>
          <ItemProduct
            condition={mockedProduct.condition}
            id={mockedProduct.id}
            img={mockedProduct.img}
            price={mockedProduct.price}
            shipping={mockedProduct.shipping}
            title={mockedProduct.title}
            key={mockedProduct.id}
          />
        </Provider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  test("Verifica que el enlace apunte a la ruta correcta", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", `/items/${mockedProduct.id}`);
  });
  test("Se muestra el precio", () => {
    const price = screen.getByText(mockedProduct.price);
    expect(price).toBeInTheDocument();
  });
  test("Se muestra el titulo", () => {
    const title = screen.getByText(mockedProduct.title);
    expect(title).toBeInTheDocument();
  });
  test("Se muestra la condición", () => {
    const condition = screen.getByTestId("condition-text");
    expect(condition).toBeInTheDocument();
  });
});
