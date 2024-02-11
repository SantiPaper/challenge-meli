import { Background } from "../Background";
import { StyledResults } from "./style";
import { useProductsContext } from "../../hooks/useProductsContext";
import { useEffect } from "react";

export const Results = () => {
  const { state, getProductsBySearch } = useProductsContext();

  useEffect(() => {
    fetch(`http://localhost:3001/api/items`)
      .then((data) => data.json())
      .then((data) => {
        getProductsBySearch(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(state);

  return (
    <StyledResults>
      {state.searchResults.categories ? (
        <p className="results__categories">{state.searchResults.categories}</p>
      ) : (
        <p>Tiraste cualquiera</p>
      )}

      <Background>
        <h1>Hola gente</h1>
      </Background>
    </StyledResults>
  );
};
