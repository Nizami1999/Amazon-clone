import React from "react";
import "./CheckoutProduct.scss";
import { IProduct } from "../../types";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct: React.FunctionComponent<IProduct> = ({
  id,
  name,
  price,
  rating,
  image,
}) => {
  const [, dispatch] = useStateValue();

  const removeProduct = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <div className="product">
      <img className="product-img" src={image} alt="product-alt" />
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}$</div>
        <div className="product-rate">
          {Array(rating)
            .fill(1)
            .map((_) => "⭐")}
        </div>
        <button onClick={removeProduct} className="btn-basket">
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
