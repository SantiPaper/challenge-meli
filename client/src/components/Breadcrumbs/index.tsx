import { Categories } from "../../types/items";
import { StyledBreadcrumbs } from "./style";

type Props = {
  categories: Categories;
};
export const Breadcrumbs = ({ categories }: Props) => {
  return (
    <StyledBreadcrumbs>
      {categories.map((catergory) => (
        <li key={catergory} className="item">
          <a href="#" className="link">
            {catergory}
          </a>
        </li>
      ))}
    </StyledBreadcrumbs>
  );
};
