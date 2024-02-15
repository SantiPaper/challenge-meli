import { Categories } from "../../types/items";
import { StyledBreadcrumbs } from "./style";

type Props = {
  categories: Categories;
};
export const Breadcrumbs = ({ categories }: Props) => {
  return (
    <StyledBreadcrumbs>
      <ul className="breadcrumbs">
        {categories.map((catergory) => (
          <li key={catergory} className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__item__link">
              {catergory}
            </a>
          </li>
        ))}
      </ul>
    </StyledBreadcrumbs>
  );
};
