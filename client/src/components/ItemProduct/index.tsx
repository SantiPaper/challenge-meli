import { StyledItemProduct } from "./style";

type Props = {
  title: string;
};
export const ItemProduct = ({ title }: Props) => {
  return (
    <StyledItemProduct>
      <h3>{title}</h3>
    </StyledItemProduct>
  );
};
