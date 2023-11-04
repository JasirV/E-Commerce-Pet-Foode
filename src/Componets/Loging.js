import React from 'react'
import { Link } from 'react-router-dom'

const Loging = () => {
  return (
    <div className='mt-5 w-25 h-100 bg-black'>
        <form action="">
        <h1>LOGIN</h1>
        <p>Please enter your username and password!</p>
        <input type="text" placeholder='UserName' />
        <br />
        <input type="password" placeholder='Password' />
        <h6>Forgot Password</h6>
        <button>Login</button>
        <p>Don't have on account?<span>Signup</span></p>
        </form>
    </div>
  )
}

export default Loging