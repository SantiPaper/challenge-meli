import { render, screen } from "@testing-library/react";
import { NotFound } from "../../../../../src/components/NotFound";

beforeEach(() => {
  render(<NotFound error="Producto no encontrado" />);
});

describe("Not found component", () => {
  test("Renderiza el componente", () => {
    const { container } = render(<NotFound error="Producto no encontrado" />);
    expect(container).toMatchSnapshot();
  });
  test("Se renderiza la foto", () => {
    const img = screen.getByAltText("error_img");
    expect(img).toBeInTheDocument();
  });
  test("Se renderiza la lista", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
