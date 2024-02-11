import { PropsWithChildren } from "react";
import { FC } from "react";
import { Navbar } from "../Navbar";
import { Container } from "../Container";
import { StyledLayout } from "./style";
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </StyledLayout>
  );
};
