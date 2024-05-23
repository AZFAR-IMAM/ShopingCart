import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Contextt";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img src={prod.image} alt={prod.name} variant="top" />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Day Delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
              }}
              size="sm"
            >
              remove from cart
            </Button>
          ) : (
            <Button
              disabled={!prod.inStock}
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
              size="sm"
            >
              {!prod.inStock ? "Out of Stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
