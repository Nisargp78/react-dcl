import Navbar from "./components/Navbar";
import AddProducts from "./components/AddProducts";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<AddProducts />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
