import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Contextt";
import { MdDelete } from "react-icons/md";

function Header() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="search your product here"
            className="m-auto"
          />
        </Navbar.Text>
        <Dropdown alignRight style={{ marginRight: 200 }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart />
            <Badge bg="success">{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{ minWidth: 370, marginRight: 70 }}
            align={{ lg: "start" }}
            class="overflow-hidden"
          >
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      calssName="cartItemImg"
                      style={{
                        width: "40px",
                        borderRadius: "50%",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="cartitemDetail">
                      <span style={{ fontSize: 14 }}>{prod.name}</span>
                      <br />
                      <span>${prod.price.slice(".")[0]}</span>
                    </div>
                    <MdDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: prod });
                      }}
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0, 10px" }}>
                    Go to cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;
