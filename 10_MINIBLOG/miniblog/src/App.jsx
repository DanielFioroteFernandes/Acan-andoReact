import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// componentes
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// pages
import About from "./pages/About/About";
import Home from "./pages/About/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
