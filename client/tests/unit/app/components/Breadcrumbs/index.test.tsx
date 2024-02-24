import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from "../../../../../src/components/Breadcrumbs";
import { mockCategories } from "../Results/mocks";
import userEvent from "@testing-library/user-event";

beforeEach(() => {});

describe("Breadcrumbs", () => {
  test("Renderiza breadcrumbs", () => {
    const { container } = render(<Breadcrumbs categories={mockCategories} />);
    expect(container).toMatchSnapshot();
  });
  test("Se puede navegar entre breadcrumbs", async () => {
    render(<Breadcrumbs categories={mockCategories} />);
    const breadCrumbList = screen.getAllByRole("link");
    const mockFn = vi.fn();
    breadCrumbList[0].onclick = mockFn;
    await userEvent.click(breadCrumbList[0]);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
