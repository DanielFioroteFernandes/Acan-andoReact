import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";

//components
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <h1>Context</h1>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
