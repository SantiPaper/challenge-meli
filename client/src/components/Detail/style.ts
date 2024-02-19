import styled from "styled-components";

export const StyledDetail = styled.section`
  .detail {
    &__info {
      display: flex;
      margin: var(--spacing-l) 0 0 var(--spacing-l);

      &__img {
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
      padding: var(--spacing-l) var(--spacing-l);

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

  @media screen and (max-width: 1200px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 1000px) {
    .detail {
      &__info {
        display: flex;
        margin: var(--spacing-l) 0 0 var(--spacing-l);

        &__img {
          width: 40rem;
          height: 40rem;
          margin-left: var(--spacing-m);
        }
        &__aside {
          margin-left: var(--spacing-m);
        }
      }
      &__description {
        width: 100%;
        padding-left: var(--spacing-m);
      }
    }
  }

  @media screen and (max-width: 800px) {
    .detail {
      &__img {
        width: 60rem;
        height: 60rem;
        margin-left: var(--spacing-m);
      }
      &__info {
        margin: 0;
        margin-top: var(--spacing-m);
        flex-direction: column;
        align-items: flex-start;
        &__img {
          width: 25rem;
          height: 25rem;
        }
      }
    }
  }
`;
