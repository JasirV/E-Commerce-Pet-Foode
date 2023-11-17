import React, { useContext, useEffect } from "react";
import { AllContext } from "../App";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navigation from "./Navigation";
import { MDBIcon } from "mdb-react-ui-kit";

const Cart = () => {
  const Navigate = useNavigate();
  const {
    cart,
    setCart,
    product,
    setTotalPrice,
    setSale,
    itemsincart,
    setItemsincart,
    login,
  } = useContext(AllContext);
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
          OldPrice:
            parseFloat(item.OldPrice) + parseFloat(ProductPrice.OldPrice),
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
          OldPrice:
            parseFloat(item.OldPrice) - parseFloat(ProductPrice.OldPrice),
        };
      }

      return item;
    });
    setCart(updateCart);
  };

  const clear = () => {
    setCart([]);
    setSale([]);
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
  setTotalPrice(totalprice);
  const offer = cart.reduce((pre, curr) => pre + parseFloat(curr.OldPrice), 0);
  const OderNow = () => {
    setSale([...cart]);
  };
  useEffect(() => {
    const updateincriment = cart.reduce((pre, curr) => pre + curr.Qty, 0);
    setItemsincart(updateincriment);
  }, [cart, handleChange, handleChangede, setItemsincart]);

  return (
    <>
      <Navigation />
      <div className="d-flex flex-wrap m-5 ">
        {cart.map((item) => (
          <Card
            className="m-2 mx-5"
            key={item.Id}
            style={{ width: "16rem", overflow: "hidden", margin: "auto" }}>
            <Card.Img
              className="img-fluid"
              variant="top"
              src={item.Image}
              style={{ height: "25rem" }}
            />
            <Card.Body>
              <Card.Title>{item.ProductName}</Card.Title>
              <Card.Text>Price: ₹{item.Price}</Card.Text>
              <Card.Text>
                Old Price: <del>₹{item.OldPrice}</del>
              </Card.Text>
              <h5
                className="border border-secondary p-2 w-50 mx-5"
                style={{ borderRadius: "5rem" }}>
                {item.Qty}
              </h5>
              <button
                className="rounded-circle"
                style={{ width: "3rem", height: "3rem", border: ".2px" }}
                onClick={() => {
                  handleChange(item.Id);
                }}>
                +
              </button>
              <button
                className="rounded-circle m-2"
                style={{ width: "3rem", height: "3rem", border: ".2px" }}
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
      {login ? (
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
              <h5>{itemsincart} Items</h5>
              <MDBIcon
                fas
                icon="truck"
                className="mt-2"
                onClick={() => {
                  Navigate("/Payment");
                  OderNow();
                }}
              />
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
      ) : (
        <h1>NOProduct</h1>
      )}
    </>
  );
};

export default Cart;
