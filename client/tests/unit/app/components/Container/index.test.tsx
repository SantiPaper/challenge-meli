import { render, screen } from "@testing-library/react";
import { Container } from "../../../../../src/components/Container";

describe("Background", () => {
  test("Renderizado inicial con contenido", () => {
    const { container } = render(
      <Container>
        <div>Contenido de prueba</div>
      </Container>
    );
    const contenido = screen.getByText("Contenido de prueba");
    expect(contenido).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
