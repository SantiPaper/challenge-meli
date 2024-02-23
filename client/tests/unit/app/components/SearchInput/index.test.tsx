import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "../../../../../src/components/SearchInput";
import { vi } from "vitest";

describe("Input de busqueda", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    );
  });

  test("Renderiza", () => {
    const { container } = render(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("Existe placeholder", () => {
    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    expect(input).toBeInTheDocument();
  });

  test("Existe el botón del componente", () => {
    const button = screen.getByRole("button", { name: "Buscar" });
    expect(button).toBeInTheDocument();
  });

  test("Permite escribir en el input de búsqueda", async () => {
    const inputElement = screen.getByPlaceholderText("Nunca dejes de buscar");

    await userEvent.type(inputElement, "Zapatos");

    expect(inputElement).toHaveValue("Zapatos");
  });
  test("Se puede enviar el query", async () => {
    const button = screen.getByRole("button");
    const form = screen.getByTestId("form");
    const fn = vi.fn();
    form.onsubmit = fn;
    await userEvent.click(button);
    expect(form.onsubmit).toHaveBeenCalledTimes(1);
  });
});
