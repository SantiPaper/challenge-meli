import { FC, PropsWithChildren } from "react";
import { Container } from "../Container";
import { StyledBackground } from "./style";

export const Background: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <StyledBackground>{children}</StyledBackground>
    </Container>
  );
};
