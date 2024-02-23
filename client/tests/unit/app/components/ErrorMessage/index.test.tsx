import { screen, render } from "@testing-library/react";
import { ErrorMessage } from "../../../../../src/components/ErrorMessage";

describe("ErrorMessage", () => {
  test("Renderizado con error", () => {
    const errorMessage = "Ocurrió un error";
    render(<ErrorMessage error={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
