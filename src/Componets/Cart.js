import React, { useContext } from 'react'
import { AllContext } from '../App'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const Navigate = useNavigate()
  const { cart, setCart, product } = useContext(AllContext)
  const totalprice = cart.reduce((pre, curr) => pre + parseFloat(curr.Price), 0)
  const offer = cart.reduce((pre, curr) => pre + parseFloat(curr.OldPrice), 0)
  const handleChange = (x) => {
    const ProductPrice = product.find((item) => item.Id === x);
    const updateCart = cart.map((item) => {
      if (item.Id === x) {
        if (item.Qty < 10) {
          item.Qty += 1;
          item.Price = parseFloat(ProductPrice.Price) * item.Qty;
        }
      }
      return item;
    });
    setCart(updateCart);
  }

  const handleChangede = (x) => {
    const updateCart = cart.map((item) => {
      if (item.Id === x) {
        if (item.Qty > 1) {
          item.Qty -= 1;
          item.Price = parseFloat(item.Price) - parseFloat(item.ProductPrice);
        }
      }
      return item;
    });
    setCart(updateCart);
  }


  return (
    <>
      <div className='d-flex flex-wrap m-5 w-75'>
        {cart.map((item) => (
          <Card className='m-2' key={item.Id} style={{ width: '16rem', overflow: "hidden", margin: "auto" }}>
            <Card.Img variant="top" style={{ width: '16rem', height: "25rem" }} src={item.Image} />
            <Card.Body>
              <Card.Title>{item.ProductName}</Card.Title>
              <Card.Text>Price: ₹{item.Price}</Card.Text>
              <Card.Text>Old Price: ₹{item.OldPrice}</Card.Text>
              <h6>{item.Qty}</h6>
              <Button onClick={() => { handleChange(item.Id) }}>+</Button>
              <Button onClick={() => { handleChangede(item.Id) }}>-</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div style={{ marginLeft: "20%" }}>
        <Card className='m-2 w-75 p-2 mr-5 shadow' style={{ overflow: "hidden", }}>
          <Card.Title>{ }</Card.Title>
          <Card.Body>
            <h3 >Total :<span className='text-success'>₹{totalprice}</span></h3>
            <del className='text-secondary'>₹{offer}</del>
            <h5>{cart.length} Items</h5>
            <Button className='mt-2' onClick={() => { Navigate("/Payment") }}>PLACE ORDER</Button>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default Cart