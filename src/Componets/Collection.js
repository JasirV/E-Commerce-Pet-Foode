import React, { useContext } from "react";
import { AllContext } from "../App";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Collection = () => {
  const { product, search, setSearch } = useContext(AllContext);
  const Navigate = useNavigate();
  const Search = product.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.ProductName.toLowerCase().includes(search.toLowerCase())) {
      return item;
    } else {
      return "";
    }
  });

  return (
    <div>
      <div
        className="mx-5"
        style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <Form className="d-flex">
            <div className="position-relative">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 my-2 mr-3"
                aria-label="Search"
                style={{ borderRadius: "5rem" }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button
              className="m-2"
              variant="outline-secondary"
              style={{ borderRadius: "5rem" }}
              type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
      <div className="d-flex flex-wrap m-5" style={{ margin: "auto" }}>
        {Search.map((item, index) => (
          <Card
            onClick={() => {
              Navigate(`/View/${item.Id}`);
            }}
            key={item.id || index}
            className="m-2"
            style={{ width: "16rem", overflow: "hidden" }}>
            <Card.Img
              className="img-fluid"
              variant="top"
              src={item.Image}
              style={{ height: "25rem" }}
            />
            <Card.Body>
              <h6 className="mt-1">₹{item.Price}</h6>
              <del className="text-secondary">₹{item.OldPrice}</del>
              <Card.Title>{item.ProductName}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Collection;
