import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SaidBar from '../Admin/SaidBar';
import { Card } from 'react-bootstrap';
import { AllContext } from '../App'; 

const UsersOders = () => {
    const { userData } = useContext(AllContext);
    const { userName } = useParams();
    
    // Ensure user data exists and has the 'order' property
    const userProduct = userData.find((item) => item.userName === userName);
    const mapData = userProduct ? userProduct.order : [];

    return (
        <div>
            <div>
                <SaidBar />
            </div>
            <div className="d-flex flex-wrap m-5" style={{ margin: "auto" }}>
                {mapData.map((item, index) => (
                    <Card
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
}

export default UsersOders;
