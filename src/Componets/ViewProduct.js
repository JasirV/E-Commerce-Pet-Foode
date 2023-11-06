import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllContext } from "../App";
import { Button, Card } from "react-bootstrap";

const ViewProduct = () => {
  const { product, setCart } = useContext(AllContext);
  const { Id } = useParams();
  const ViewProduct = product.find((item) => item.Id === parseInt(Id));
  const addItem = () => {
    setCart((prevCart) => [
      ...prevCart,
      { ...ViewProduct, ProductPrice: ViewProduct.Price },
    ]);
  };
  return (
    <div className="mt-3">
      <Card style={{ width: "16rem", overflow: "hidden", margin: "auto" }}>
        <Card.Img
          variant="top"
          style={{ width: "16rem", height: "25rem" }}
          src={ViewProduct.Image}
        />
        <Card.Body>
          <h6 className="mt-1">₹{ViewProduct.Price}</h6>
          <del className="text-secondary">₹{ViewProduct.OldPrice}</del>
          <Card.Title>{ViewProduct.ProductName}</Card.Title>
          <Button onClick={addItem} type="primary">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewProduct;
