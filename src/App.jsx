import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { useState } from "react";

const App = () => {

  const [cart,setCart]=useState([])
  return (<>

    <BrowserRouter>
      <Header cart={cart} />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} /> } />
          <Route  path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>

      </div>

    </BrowserRouter>


  </>);
}

export default App;