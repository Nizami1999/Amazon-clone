import "./Product.scss";
import { IProduct } from "../../types";
import { useStateValue } from "../../StateProvider";

const Product: React.FunctionComponent<IProduct> = ({
  id,
  name,
  price,
  rating,
  image,
}) => {
  const [, dispatch] = useStateValue();

  const addProduct = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        name,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <h6 className="product-name">{name}</h6>
      <h6 className="product-price">${price}</h6>
      <h6 className="product-rate">
        {Array(rating)
          .fill(1)
          .map((_) => "⭐")}
      </h6>
      <img src={image} alt="product-img" />
      <button onClick={addProduct} className="btn-basket">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
