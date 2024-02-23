import { render } from "@testing-library/react";
import { Results } from "../../../../../src/components/Results";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "../../../../../src/context";

// Describe el componente Results
describe("Componente Results", () => {
  // Prueba para renderizar el componente
  test("Rendering el componente", () => {
    const { container } = render(
      <Provider>
        <BrowserRouter>
          <Results />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  // Prueba adicional
  test("Otra prueba", () => {
    // Aquí iría la lógica de la segunda prueba
  });
});
