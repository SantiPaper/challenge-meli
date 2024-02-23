import { screen, render } from "@testing-library/react";
import { Navbar } from "../../../../../src/components/Navbar";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
});

describe("Navbar", () => {
  test("Renderiza navbar", () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  test("Se encuentra el logo", () => {
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });
});
