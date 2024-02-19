import { styled } from "styled-components";

export const StyledNavbar = styled.header`
  background-color: var(--yellow);
  display: flex;
  justify-content: center;
  width: 100%;

  .navbar {
    &__content {
      padding: 1rem 1rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    .navbar {
      &__img {
        width: 5rem;
      }
    }
  }
`;
