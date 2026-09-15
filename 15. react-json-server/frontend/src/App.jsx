import { useState } from "react";
import AddProducts from "./components/AddProducts.jsx";
import Cart from "./components/cart.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import UserList from "./components/UserList.jsx";

const App = () => {
  let [display, setDisplay] = useState("products");
  let handleClick = (name) => {
    setDisplay(name);
  }
 let renderComponent = () => {
   if (display === "products") {
   return <UserList/>
  }
  if (display === "cart") {
   return <Cart/>
  }
  if (display === "addProducts") {
   return <AddProducts/>
  }
  if (display === "login") {
   return <Login/>
  }
  if (display === "signup") {
   return <Signup/>
  }
 }

  return <div>
    <nav className="flex gap-20 items-center justify-center bg-slate-400 h-20">
      <button onClick={()=>handleClick("products")}>Products</button>
      <button onClick={()=>handleClick("cart")}>Cart</button>
      <button onClick={()=>handleClick("addProducts")}>Add Product</button>
      <button onClick={()=>handleClick("login")}>Login</button>
      <button onClick={()=>handleClick("signup")}>Signup</button>
    </nav>
    {renderComponent()}
  </div>;
};

export default App;
