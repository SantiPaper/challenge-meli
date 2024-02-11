import { StyledItemProduct } from "./style";
import imgShipping from "../../../public/images/shipping.png";

type Props = {
  title: string;
  price: number;
  img: string;
  shipping: boolean;
  id: string;
};
export const ItemProduct = ({ title, price, img, shipping, id }: Props) => {
  return (
    <StyledItemProduct id={id}>
      <img
        className="product__img"
        src={img}
        alt={title}
        width={180}
        height={180}
      />

      <div className="product__info">
        <div className="product__info__price-container">
          <p className="product__info__price-container__price">$ {price}</p>
          {shipping && <img src={imgShipping} alt="" width={15} height={15} />}
        </div>
        <h3 className="product__info__title">{title}</h3>
      </div>
    </StyledItemProduct>
  );
};
