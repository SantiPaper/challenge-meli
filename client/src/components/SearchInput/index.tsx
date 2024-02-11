import { StyledSearchInput } from "./style";
import { useProductsContext } from "../../hooks/useProductsContext";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const { state, getSearchString } = useProductsContext();
  const navigate = useNavigate();

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    getSearchString(ev.target.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (state.searchInput) {
      navigate(`/items?search=${state.searchInput}`);
    }
  };

  return (
    <StyledSearchInput onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        Buscar productos
      </label>
      <input
        onChange={handleChange}
        className="search__input"
        placeholder="Nunca dejes de buscar"
        type="search"
        id="search"
        name="search"
      />
      <button className="search__button" aria-label="Buscar" type="submit">
        <img width={20} src="/images/search.png" alt="Buscar" />
      </button>
    </StyledSearchInput>
  );
};
