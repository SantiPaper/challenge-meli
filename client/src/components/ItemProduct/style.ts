import styled from "styled-components";

export const StyledItemProduct = styled.article`
  a {
    display: flex;
    color: currentColor;
    text-decoration: none;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--gray-100);
  }
  .product {
    &__img {
      margin: var(--spacing-m);
      border-radius: var(--radius);
    }

    &__info {
      display: flex;
      align-items: center;
      width: 100%;

      &__price-container {
        display: flex;
        margin-bottom: var(--spacing-l);
        gap: var(--spacing-m);
        align-items: center;

        &__price {
          font-size: var(--font-size-500);
        }
      }
      &__title {
        font-size: var(--font-size-400);
        font-weight: 400;
      }
      &__condition {
        font-size: var(--font-size-100);
        margin-left: auto;
        margin-right: 10rem;
      }
    }
  }
`;
