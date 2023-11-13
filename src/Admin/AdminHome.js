import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AllContext } from '../App';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
  const { userData } = useContext(AllContext)
  const Navigation=useNavigate()
  return (
    <div className='d-flex ' >
      <nav className='bg-black' style={{ height: "88vh", textAlign: "center", width: "20%", justifyContent: "center" }}>
        <div className='mt-3 mb-3 '>
          <h2 className='mt-5 text-white '>Addmin </h2>
        </div>

        <li className='mt-5 text-white' style={{ listStyleType: "none" }}>
          <h5>Users</h5>
        </li>
        <li className='mt-2 text-white' style={{ listStyleType: "none" }}>
          <h6 onClick={()=>{Navigation("/Edit")}}>Edit</h6>
        </li>
        <li className='mt-2 text-white ' style={{ listStyleType: "none" }}>
          <h6>Seles</h6>
        </li>
      </nav>
      <div className='w-100 d-flex p-2' style={{ background: "blue", textAlign: 'center', justifyContent: "center", flexWrap: "wrap", }}>
        <div className=' w-75 bg-black mt-3 p-3' style={{ height: "5rem", borderRadius: "5rem" }}>
          <h1 className='text-white'>HELLO JASI</h1>
        </div>
        {userData.map((item) => (
          <div className='w-75 bg-black mt-2' >
            <div className='contaner bg-success rounded p-4 d-flex' style={{textAlign:"start"}}>
              <img className='m-2' style={{width:"2rem", height:"2rem", background:"red"}} src="" alt="" />
              <h5 className='m-2'>{item.userName}</h5></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminHome;
