import { StyledSearchInput } from "./style";

export const SearchInput = () => {
  return (
    <StyledSearchInput>
      <label htmlFor="search" className="sr-only">
        Buscar producto
      </label>
      <input
        className="search__input"
        placeholder="Nunca dejes de buscar"
        type="text"
        id="search"
        name="search"
      />
      <button className="search__button" aria-label="Buscar">
        <img width={20} src="/images/search.png" alt="Buscar" />
      </button>
    </StyledSearchInput>
  );
};
