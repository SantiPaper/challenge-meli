import { PropsWithChildren } from "react";
import { FC } from "react";
import { Navbar } from "../Navbar";
import { Container } from "../Container";
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};
