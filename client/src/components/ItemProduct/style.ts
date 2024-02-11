import styled from "styled-components";

export const StyledItemProduct = styled.article`
  display: flex;
  .product {
    &__img {
      padding: var(--spacing-m);
      border-radius: var(--radius);
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__price-container {
        display: flex;
        margin-bottom: var(--spacing-l);
        gap: 0.5rem;
        align-items: center;

        &__price {
          font-size: var(--font-size-500);
        }
      }
      &__title {
        font-size: var(--font-size-400);
      }
    }
  }
`;
