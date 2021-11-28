import { useStateValue } from "../../StateProvider";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  const [{ products }] = useStateValue();

  return (
    <div className="home">
      <Banner />
      <div className="product-list container">
        <div className="products-row">
          {products.map((product) => {
            if (product.id > 0 && product.id < 3) {
              return (
                <Product
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  price={product.price}
                />
              );
            }
          })}
        </div>
        <div className="products-row">
          {products.map((product) => {
            if (product.id > 2 && product.id < 6) {
              return (
                <Product
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  price={product.price}
                />
              );
            }
          })}
        </div>
        <div className="products-row">
          {products.map((product) => {
            if (product.id > 5) {
              return (
                <Product
                  id={product.id}
                  name={product.name}
                  rating={product.rating}
                  image={product.image}
                  price={product.price}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
