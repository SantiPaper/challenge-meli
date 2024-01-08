import { PropsWithChildren } from "react";
import { FC } from "react";
import { Navbar } from "../Navbar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
