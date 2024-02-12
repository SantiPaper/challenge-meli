import styled from "styled-components";

export const StyledBreadcrumbs = styled.ul`
  padding: var(--spacing-m) 0;
  display: flex;

  .item {
    font-size: var(--font-size-200);
    list-style: none;
    color: var(--gray-400);

    &:last-child {
      color: var(--gray-600);
      font-weight: 600;
    }

    &:not(:last-child)::after {
      content: ">";
      margin: 1.5rem;
    }
  }

  .link {
    text-decoration: none;
    color: currentColor;
  }

  li:not(:last-child)::after {
    content: ">";
    margin: 1.5rem;
  }
`;
