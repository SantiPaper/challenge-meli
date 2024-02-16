import styled from "styled-components";

export const StyledDetail = styled.section`
  .detail {
    &__info {
      display: flex;
      margin: var(--spacing-l) 0 0 var(--spacing-l);

      &__img {
        border-bottom: 1px solid var(--gray-100);
        padding-bottom: 1rem;
      }

      &__aside {
        margin: var(--spacing-l) var(--spacing-l) 0 var(--spacing-l);

        &__condition {
          margin-bottom: var(--spacing-m);
          font-size: var(--font-size-200);
        }

        &__title {
          font-size: var(--font-size-500);
        }

        &__price {
          margin: var(--spacing-l) 0 var(--spacing-l) 0;
          font-size: var(--font-size-700);
        }

        &__button {
          padding: 1rem 8rem;
          background-color: var(--blue);
          color: white;
          border: none;
          border-radius: var(--radius);
          font-family: inherit;
          font-size: var(--font-size-300);
          cursor: pointer;
          transition: 0.1s ease-in-out;

          &:hover {
            filter: brightness(95%);
          }
        }
      }
    }
    &__description {
      margin: var(--spacing-l) var(--spacing-l);
      width: 70%;

      &__title {
        font-size: var(--font-size-600);
        font-weight: 500;
      }

      &__text {
        margin: var(--spacing-l) 0 var(--spacing-l) 0;
        font-size: var(--font-size-300);
      }
    }
  }
`;
