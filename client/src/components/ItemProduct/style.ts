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

  @media screen and (max-width: 900px) {
    .product {
      &__img {
        width: 15rem;
        height: 15rem;
      }
      &__info {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        &__condition {
          margin-left: 0;
          margin-right: 0;
          padding: var(--spacing-m) 0;
          font-size: var(--font-size-200);
        }
        &__price-container {
          margin: var(--spacing-m) 0;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .product {
      &__img {
        width: 12rem;
        height: 12rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .product {
      &__info {
        &__title {
          font-size: var(--font-size-200);
        }
        &__price-container {
          &__price {
            font-size: var(--font-size-300);
          }
        }
      }
    }
  }
`;
