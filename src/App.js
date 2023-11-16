import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loging from "./Componets/Loging";
import Signup from "./Componets/Signup";
import Navigation from "./Componets/Navigation";
import Payment from "./Componets/Payment";
import { Product } from "./Componets/ProducetData";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Componets/Home";
import Collection from "./Componets/Collection";
import Dog from "./Componets/Dog";
import Cat from "./Componets/Cat";
import ViewProduct from "./Componets/ViewProduct";
import Cart from "./Componets/Cart";
import { Footer } from "./Componets/Footer";
import AdminHome from "./Admin/AdminHome";
import Edit from "./Admin/Edit";
import Users from "./Admin/Users";
import AdminProduct from "./Admin/AdminProduct";
import AdminOders from "./Admin/AdminOders";
import ProductEdit from "./Admin/ProductEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export const AllContext = createContext();
function App() {
  const [product, setProduct] = useState(Product);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState([]);
  const [login, setLoging] = useState(false);
  const [totalPrice, setTotalPrice] = useState();
  const [sale, setSale] = useState([]);
  const [itemsincart, setItemsincart] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <AllContext.Provider
        value={{
          product,
          setProduct,
          cart,
          setCart,
          userData,
          setUserData,
          login,
          setLoging,
          totalPrice,
          setTotalPrice,
          sale,
          setSale,
          itemsincart,
          setItemsincart,
          search,
          setSearch,
        }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Loging />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/Dog" element={<Dog />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/View/:Id" element={<ViewProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/addminhome" element={<AdminHome />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addminprodut" element={<AdminProduct />} />
          <Route path="/adminOders" element={<AdminOders />} />
          <Route path="/ProductEdit/:Id" element={<ProductEdit />} />
          <Route />
        </Routes>
        <Footer />
      </AllContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
