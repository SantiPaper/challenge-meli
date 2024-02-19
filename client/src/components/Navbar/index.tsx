import { Container } from "../Container";
import { SearchInput } from "../SearchInput";
import { StyledNavbar } from "./style";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <div className="navbar__content">
          <Link to="/">
            <img
              className="navbar__img"
              width={70}
              src="/images/logo_meli.png"
              alt="Logo"
            />
          </Link>
          <SearchInput />
        </div>
      </Container>
    </StyledNavbar>
  );
};
