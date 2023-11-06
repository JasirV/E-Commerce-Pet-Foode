import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='rounded shadow p-3 mb-5 bg-white ' style={{ margin: "auto", height: "55vh", width: "25rem", marginTop: "10%" }}>
            <form >
                <h1 className='mt-3' style={{ fontFamily: "inherit" }}>SIGN UP</h1>
                <input className='p-2 w-75 mt-3' style={{ height: "2.5rem", border: "1px solid gray", borderRadius: ".5rem", }} type="text" placeholder='UserName' />
                <br />
                <input className='p-2 w-75 mt-4' style={{ height: "2.5rem", border: "1px solid gray", borderRadius: ".5rem", }} type="email" placeholder='Email' />
                <br />
                <input className='p-2 w-75 mt-4' style={{ height: "2.5rem", border: ".5px solid gray", borderRadius: ".5rem", }} type="password" placeholder='Password' />
                <button className='rounded mt-4 w-50 p-2' style={{ background: "#176BEF ", border: "1px", color: "white", fontWeight: "600" }}>Sign up</button>
                <p className='mt-4'>Already have an account? <Link style={{textDecoration:"none"}} to={"/Login"}>Login</Link></p>
            </form>
        </div>

    )
}

export default Signup