import { styled } from "styled-components";

export const StyledSearchInput = styled.form`
  width: fit-content;
  display: flex;
  max-width: 100%;
  width: 100%;

  .search {
    &__input {
      font-size: var(--font-size-400);
      padding: 1rem;
      width: 100%;
      border: none;
      border-radius: var(--radius) 0 0 var(--radius);
    }
    &__button {
      padding: 1rem 1.5rem;
      border-radius: 0 var(--radius) var(--radius) 0;
      border: none;

      img {
        vertical-align: middle;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .search {
      &__input {
        font-size: var(--font-size-300);
      }
    }
  }
`;
