import React, { useContext } from "react";
import { AllContext } from "../App";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dog = () => {
  const { product } = useContext(AllContext);
  const Navigate = useNavigate();
  const dogProduct = product.filter((iteam) => iteam.Animal === "Dog");
  return (
    <div>
      <div className="d-flex flex-wrap m-5" style={{ margin: "auto" }}>
        {dogProduct.map((item, index) => (
          <Card
            onClick={() => {
              Navigate(`/View/${item.Id}`);
            }}
            key={item.id || index}
            className="m-2"
            style={{ width: "16rem", overflow: "hidden", margin: "auto" }}>
            <Card.Img
              variant="top"
              style={{ width: "16rem", height: "25rem" }}
              src={item.Image}
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

export default Dog;
