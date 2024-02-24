import { render, screen } from "@testing-library/react";
import { Home } from "../../../../../src/components/Home";

describe("Home", () => {
  test("Renderiza el componente", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
  test.skip("Renderiza el texto", () => {
    render(<Home />);
    const text = screen.getByText(
      "Aun no realizaste tu búsqueda, te alentamos a que lo hagas!"
    );
    expect(text).toBeInTheDocument();
  });
});
