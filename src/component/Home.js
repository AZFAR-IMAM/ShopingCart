import { CartState } from "../context/Contextt";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./styles.css";
function Home() {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
