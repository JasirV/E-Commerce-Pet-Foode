import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AllContext } from '../App';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const { product } = useContext(AllContext);
  const Navigate=useNavigate()
  console.log(product);
  return (
    <div className='d-flex ' >
      <nav className='bg-black' style={{ height: "100vh", textAlign: "center", width: "20%", justifyContent: "center" }}>
        <div className='mt-3 mb-3 '>
          <h2 className='mt-5 text-white '>Addmin </h2>
        </div>

        <li className='mt-5 text-white' style={{ listStyleType: "none" }}>
          <h6 onClick={()=>{Navigate("/addminhome")}}>Users</h6>
        </li>
        <li className='mt-2 text-white' style={{ listStyleType: "none" }}>
          <h5>Edit</h5>
        </li>
        <li className='mt-2 text-white ' style={{ listStyleType: "none" }}>
          <h6>Seles</h6>
        </li>
      </nav>
      <div className='w-100 d-flex p-2' style={{ background: "blue", textAlign: 'center', justifyContent: "center", flexWrap: "wrap", }}>
        <div className=' w-75 bg-black mt-3 p-3' style={{ height: "5rem", borderRadius: "5rem" }}>
          <h1 className='text-white'>HELLO JASI</h1>
        </div>
        {product.map((item) => (
          <div className='w-75  mt-2' >
            <div className='contaner bg-success rounded  d-flex' style={{textAlign:"start", justifyContent:"space-around", alignItems:"center"}}>
              <img className='m-2' style={{width:"5rem", height:"5rem", background:"red"}} src={item.Image} alt="" />
              <h5 className='m-2'>{item.ProductName}</h5>
              <div>
              <Button type="primary" className='m-2'>Edit</Button>
              <button className='bg-danger btn text-white'>Remove</button>
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edit;
