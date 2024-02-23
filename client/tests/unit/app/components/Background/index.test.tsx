import { render, screen } from "@testing-library/react";
import { Background } from "../../../../../src/components/Background";

describe("Background", () => {
  test("Renderizado inicial con contenido", () => {
    const { container } = render(
      <Background>
        <div>Contenido de prueba</div>
      </Background>
    );
    const contenido = screen.getByText("Contenido de prueba");
    expect(contenido).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
