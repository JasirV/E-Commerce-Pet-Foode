import React, { useContext } from "react";
import { AllContext } from "../App";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const Navigate = useNavigate();
  const { cart, setCart, product } = useContext(AllContext);

  const handleChange = (x) => {
    const ProductPrice = product.find((item) => item.Id === x);
    if (!ProductPrice) {
      return;
    }

    const updateCart = cart.map((item) => {
      if (item.Id === x && item.Qty < item.Stock) {
        return {
          ...item,
          Qty: item.Qty + 1,
          Price: parseFloat(item.Price) + parseFloat(ProductPrice.Price),
        };
      }
      return item;
    });
    setCart(updateCart);
  };

  const handleChangede = (x) => {
    const updateCart = cart.map((item) => {
      if (item.Id === x && item.Qty > 1) {
        const ProductPrice = product.find(
          (productItem) => productItem.Id === x
        );
        if (!ProductPrice) {
          return item;
        }
        return {
          ...item,
          Qty: item.Qty - 1,
          Price: parseFloat(item.Price) - parseFloat(ProductPrice.Price),
        };
      }
      return item;
    });
    setCart(updateCart);
  };

  const clear = () => {
    setCart([]);
  };

  const remove = (x) => {
    const remv = cart.filter((item) => item.Id !== x);
    setCart(remv);
    toast.error("Your Product Is Removed");
  };

  const totalprice = cart.reduce(
    (pre, curr) => pre + parseFloat(curr.Price),
    0
  );
  const offer = cart.reduce((pre, curr) => pre + parseFloat(curr.OldPrice), 0);

  return (
    <>
      <div className="d-flex flex-wrap m-5 ">
        {cart.map((item) => (
          <Card
            className="m-2"
            key={item.Id}
            style={{ width: "16rem", overflow: "hidden", margin: "auto" }}>
            <Card.Img
              variant="top"
              style={{ width: "16rem", height: "25rem" }}
              src={item.Image}
            />
            <Card.Body>
              <Card.Title>{item.ProductName}</Card.Title>
              <Card.Text>Price: ₹{item.Price}</Card.Text>
              <Card.Text>Old Price: ₹{item.OldPrice}</Card.Text>
              <h5 className="border border-secondary p-2">{item.Qty}</h5>
              <button
                className="rounded-circle"
                style={{ width: "3rem", height: "3rem" }}
                onClick={() => {
                  handleChange(item.Id);
                }}>
                +
              </button>
              <button
                className="rounded-circle m-2"
                style={{ width: "3rem", height: "3rem" }}
                onClick={() => {
                  handleChangede(item.Id);
                }}>
                -
              </button>
              <br />
              <Button className=" m-2">Buy</Button>
              <button
                className=" m-2 btn btn-light"
                onClick={() => {
                  remove(item.Id);
                }}>
                Remove
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div style={{ marginLeft: "20%" }}>
        <Card
          className="m-2 w-75 p-2 mr-5 shadow"
          style={{ overflow: "hidden" }}>
          <Card.Title>{}</Card.Title>
          <Card.Body>
            <h3>
              Total: <span className="text-success">₹{totalprice}</span>
            </h3>
            <del className="text-secondary">₹{offer}</del>
            <h5>{cart.length} Items</h5>
            <Button
              className="mt-2"
              onClick={() => {
                Navigate("/Payment");
              }}>
              PLACE ORDER
            </Button>
            <br />
            <Button
              onClick={() => {
                clear();
              }}
              className="mt-2 btn btn-light">
              Clear Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Cart;
