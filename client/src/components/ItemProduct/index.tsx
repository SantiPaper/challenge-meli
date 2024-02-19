import { StyledItemProduct } from "./style";
import imgShipping from "../../../public/images/shipping.png";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  price: string;
  img: string;
  shipping: boolean;
  id: string;
  condition: string;
};
export const ItemProduct = ({
  title,
  price,
  img,
  shipping,
  id,
  condition,
}: Props) => {
  return (
    <StyledItemProduct key={id}>
      <Link to={`/items/${id}`}>
        <img
          className="product__img"
          src={img}
          alt={title}
          width={180}
          height={180}
        />

        <div className="product__info">
          <div>
            <div className="product__info__price-container">
              <p className="product__info__price-container__price">{price}</p>
              {shipping && (
                <img src={imgShipping} alt="" width={15} height={15} />
              )}
            </div>
            <div>
              <h3 className="product__info__title">{title}</h3>
            </div>
          </div>
          <p className="product__info__condition">
            {condition === "new" ? "Nuevo" : "Usado"}
          </p>
        </div>
      </Link>
    </StyledItemProduct>
  );
};
