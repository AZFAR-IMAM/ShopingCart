import { Button, ListGroup } from "react-bootstrap";
import { CartState } from "../context/Contextt";
import { useEffect, useState } from "react";

function Cart() {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(
    function () {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    },
    [cart]
  );
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <span>{prod.name}</span>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">SubTotal of {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total : ${total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
