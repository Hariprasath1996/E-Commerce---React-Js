import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

const App = () => {
  return (<>



    <BrowserRouter>
      <Header />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/cart" element={<Cart/>} />
        </Routes>

      </div>

    </BrowserRouter>


  </>);
}

export default App;