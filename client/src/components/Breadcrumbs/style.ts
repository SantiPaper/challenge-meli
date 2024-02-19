import styled from "styled-components";

export const StyledBreadcrumbs = styled.nav`
  padding: var(--spacing-m) 0;

  .breadcrumbs {
    display: flex;
    &__item {
      font-size: var(--font-size-200);
      list-style: none;
      color: var(--gray-400);

      &:last-child {
        color: var(--gray-600);
        font-weight: 600;
      }

      &:not(:last-child)::after {
        content: ">";
        margin: 1rem;
      }
      &__link {
        text-decoration: none;
        color: currentColor;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .breadcrumbs {
      flex-wrap: wrap;
      &__item {
        font-size: var(--font-size-100);
      }
    }
  }
`;
