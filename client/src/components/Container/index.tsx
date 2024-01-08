import { FC, PropsWithChildren } from "react";
import { StyledContainer } from "./style";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
