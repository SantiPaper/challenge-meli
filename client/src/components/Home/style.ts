import { styled } from "styled-components";

export const StyledHome = styled.div`
  text-align: center;
  .hero {
    padding: 1rem;
    margin-top: 5rem;
    font-size: var(--font-size-700);
  }
  .text {
    font-size: var(--font-size-500);
    padding: 1rem;
  }

  @media screen and (max-width: 700px) {
    .hero {
      font-size: var(--font-size-600);
    }
    .text {
      font-size: var(--font-size-300);
    }
  }
`;
