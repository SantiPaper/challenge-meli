import { render, screen } from "@testing-library/react";
import { Loading } from "../../../../../src/components/Loading";

beforeEach(() => {
  render(<Loading />);
});

describe("Loading component", () => {
  test("Renderiza loading", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
  test("Contiene bien el texto", () => {
    const text = screen.getByText("Cargando...");
    expect(text).toBeInTheDocument();
  });
});
