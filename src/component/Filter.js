import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { useState } from "react";

function Filter() {
  const [rate, setRate] = useState(3);
  return (
    <div className="filters">
      <span className="title">FILTER PRODUCT</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Decending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}> Rating: </label>
        <Rating
          rating={rate}
          style={{ cursor: "pointer" }}
          onClick={(i) => setRate(i + 1)}
        />
      </span>
      <Button variant="light">Clear Filter</Button>
    </div>
  );
}

export default Filter;
