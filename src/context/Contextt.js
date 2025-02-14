import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";

const Cart = createContext();
function Contextt({ children }) {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    // inStock: faker.helpers.arrayElement([0, 3, , 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    raiting: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Contextt;

export function CartState() {
  return useContext(Cart);
}
