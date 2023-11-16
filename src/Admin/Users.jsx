import React from 'react'
import { useContext } from 'react'
import { AllContext } from '../App'
import prologo from '../img/Profile-720.png'
import SaidBar from './SaidBar'
const Users = () => {
  const { userData } = useContext(AllContext);
  return (
    <div className='d-flex'>
      <div>
        <SaidBar />
      </div>

      <div className='w-100 d-flex p-2' style={{ textAlign: 'center', justifyContent: "center", flexWrap: "wrap", }}>
        {userData.map((item) => (
          <div className='w-100  mt-2' >
            <div className='contaner bg-success rounded d-flex' style={{ textAlign: "start" }}>
              <img className='m-2' style={{ width: "5rem", height: "5rem", }} src={prologo} alt="" />
              <div>
                <h3 className='m-2'>{item.userName}</h3>
                <h6>{item.password}</h6>
                <h6>{item.emailId}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users