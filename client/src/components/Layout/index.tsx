import { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";
import { Container } from "../Container";
import { StyledLayout } from "./style";
export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <StyledLayout>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </StyledLayout>
  );
};
