import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SaidBar from './SaidBar';
import { AllContext } from '../App';

function AdminHome() {
  const {userData,product}=useContext(AllContext)
  return (
    <div className='d-flex ' >
      <div>
        <SaidBar />
      </div>
      <div className='m-auto mt-3'>
        <div className='container-fluid'>
          <div className='row g-3 my-2'>
            <div className='col-md-3'>
              <div className='p-5 bg-white shadow d-flex justify-content-around align-items-center rounded'>
                <div >
                <h3 className='f-2'>{product.length}</h3>

                  <p className='fs-5'>Product</p>
                </div>
                <i className='bi bi-cart-plus p-3 fs-1'></i>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='p-5 bg-white shadow d-flex justify-content-around align-items-center rounded'>
                <div  >
                  <h3 className='fs-2'>140</h3>
                  <p className='fs-5'>Sales</p>
                </div>
                <i class="bi bi-currency-exchange p-3 fs-1"></i>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='p-5 bg-white shadow d-flex justify-content-around align-items-center rounded'>
                <div >
                  <h3 className='fs-2'>80</h3>
                  <p className='fs-5'>Delivery</p>
                </div>
                <i class="bi bi-truck p-3 fs-1"></i>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='p-5 bg-white shadow d-flex justify-content-around align-items-center rounded'>
                <div  >
                  <h3 className='fs-2'>{userData.length}</h3>
                  <p className='fs-5'>Users</p>
                </div>
                <i class="bi bi-person p-3 fs-1"></i>
              </div>
            </div>

          </div>





        </div>
      </div>
    </div>
  );
}

export default AdminHome;
