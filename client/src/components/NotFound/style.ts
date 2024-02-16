import styled from "styled-components";

export const StyledNotFound = styled.div`
  background-color: white;
  width: 80%;
  margin-top: 10rem;
  padding: 1rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    margin-right: var(--spacing-l);
  }
  .error {
    padding: var(--spacing-xl);
    &__text {
      font-size: var(--font-size-500);
      margin-bottom: 2rem;
    }
    &__help-item {
      font-size: var(--font-size-300);
      margin-left: 1.8rem;
    }
  }
`;
