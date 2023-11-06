import React, { useContext } from 'react'
import { AllContext } from '../App'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Collection = () => {
    const {product}=useContext(AllContext)
    const Navigate=useNavigate()
    console.log(product);
  return (
    <div>
       <div className='d-flex flex-wrap m-5' style={{margin:"auto"}}>
      {product.map((item)=>(
        <Card onClick={()=>{Navigate(`/View/${item.Id}`)}} key={item.id} className='m-2' style={{ width: '16rem', overflow:"hidden"}}>
        <Card.Img variant="top" style={{width:'16rem',height:"25rem"}} src={item.Image} />
        <Card.Body>
          <h6 className='mt-1'>₹{item.Price}</h6>
          <del className='text-secondary'>₹{item.OldPrice}</del>
          <Card.Title>{item.ProductName}</Card.Title>
        </Card.Body>
      </Card>
      ))}
   
    </div>
    </div>
  )
}

export default Collection