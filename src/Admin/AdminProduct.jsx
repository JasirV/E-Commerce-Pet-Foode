import React from 'react'
import SaidBar from './SaidBar'
import { useContext } from 'react'
import { AllContext } from '../App'
import { Button, Card } from 'react-bootstrap'

const AdminProduct = () => {
    const { product } = useContext(AllContext)
    return (
        <div className='d-flex'>
            <div>
                <SaidBar />
            </div>
            
            <div className="d-flex flex-wrap m-5" style={{ margin: "auto" }}>
                {product.map((item,index) => (
                    <Card
                    key={item.id || index}
                        className="m-2"
                        style={{ width: "16rem", overflow: "hidden" }}>
                        <Card.Img
                            variant="top"
                            style={{ width: "16rem", height: "25rem" }}
                            src={item.Image}
                        />
                        <Card.Body>
                            <h6 className="mt-1">₹{item.Price}</h6>
                            <del className="text-secondary">₹{item.OldPrice}</del>
                            <Card.Title>{item.ProductName}</Card.Title>
                            <Button className='m-2'>Edit</Button>
                            <Button className='m-2 btn btn-danger' type='button'>Remove</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default AdminProduct