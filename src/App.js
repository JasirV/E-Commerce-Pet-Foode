import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loging from './Componets/Loging';
import Signup from './Componets/Signup';
import Navigation from './Componets/Navigation';
import Payment from './Componets/Payment';
import { Product } from './Componets/ProducetData';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import Collection from './Componets/Collection';
import Dog from './Componets/Dog';
import Cat from './Componets/Cat';
import ViewProduct from './Componets/ViewProduct';
import Cart from './Componets/Cart';
export const AllContext=createContext();
function App() {
  const [product,setProduct]=useState(Product)
  const[cart,setCart]=useState([]);
  return (
    <div className="App">
      <Navigation/>
    
      <AllContext.Provider value={{product,setProduct,cart,setCart}}>
     
      <Routes>

        <Route path='home' element={<Home/>} />
        <Route path='/Login' element={<Loging/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/'element={<Collection/>}/>
        <Route path='/Dog' element={<Dog/>}/>
        <Route path='/Cat' element={<Cat />}/>
        <Route path='/View/:Id' element={<ViewProduct/>}/> 
        <Route path='/Cart' element={<Cart/>}/>
        <Route />
      </Routes>
      </AllContext.Provider>
    </div>
  );
}

export default App;
