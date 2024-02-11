import { StyledSearchInput } from "./style";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const SearchInput = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  };

  const handleSubmit = () => {
    navigate(`/items?search=${search}`);
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
