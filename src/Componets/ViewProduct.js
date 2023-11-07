import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllContext } from "../App";
import { Button, Card } from "react-bootstrap";

const ViewProduct = () => {
  const navigate = useNavigate();
  const { product, setCart, login, cart } = useContext(AllContext);
  const { Id } = useParams();
  const ViewProduct = product.filter((item) => item.Id === parseInt(Id));
  const addItem = () => {
    if (login) {
      const [newpro] = ViewProduct;
      const filterCart = cart.filter((item) => item.Id === newpro.Id);

      if (filterCart.length > 0) {
        alert("product already set to cart");
      } else {
        setCart([...cart, newpro]);

        alert("Successful add to cart");
      }
    } else {
      alert("plese log");
      navigate("/login");
    }
  };
  console.log(ViewProduct, "dgdsdhgfhgdhfgjs");
  return (
    <div className="mt-3">
      {ViewProduct.map((item) => (
        <Card style={{ width: "16rem", overflow: "hidden", margin: "auto" }}>
          <Card.Img
            variant="top"
            style={{ width: "16rem", height: "25rem" }}
            src={item.Image}
          />
          <Card.Body>
            <h6 className="mt-1">₹{item.Price}</h6>
            <del className="text-secondary">₹{item.OldPrice}</del>
            <Card.Title>{item.ProductName}</Card.Title>
            <Button onClick={addItem} type="primary">
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ViewProduct;
