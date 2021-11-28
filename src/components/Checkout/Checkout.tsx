import "./Checkout.scss";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";

const Checkout: React.FunctionComponent = () => {
  const [{ basket }] = useStateValue();

  return (
    <div id="checkout" className="container">
      <div className="basket-cart">
        <div className="title">Shopping Cart</div>
        <div className="line"></div>
        {basket?.length ? (
          basket?.map((product) => {
            return (
              <CheckoutProduct
                id={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            );
          })
        ) : (
          <h1 className="warning">Your Amazon Cart is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Checkout;
