import { StyledNotFound } from "./style";
import search from "../../../public/images/1178479.png";

type Props = {
  error: string | null;
};

export const NotFound = ({ error }: Props) => {
  return (
    <StyledNotFound>
      <img className="img" src={search} alt="" width={80} />
      <div className="error">
        <h2 className="error__text">{error}</h2>
        <ul>
          <li className="error__help-item">
            Revisa la ortografía de la palabra.
          </li>
          <li className="error__help-item">
            Utiliza palabras más genéricas o menos palabras.
          </li>
          <li className="error__help-item">
            Utiliza palabras más genéricas o menos palabras.
          </li>
        </ul>
      </div>
    </StyledNotFound>
  );
};
