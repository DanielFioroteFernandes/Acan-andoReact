import "./App.css";

// 1 - Config React Routes

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// pages

import About from "./pages/About";
import Home from "./pages/Home";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Search from "./pages/Search";

//components
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>

        <BrowserRouter>
          <NavBar />

          {/* 9 - Busca items */}
          <SearchForm />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* 6 - nexted routes*/}
            <Route path="/products/:id/info" element={<Info />} />

            {/* 4 - Rota Dinamica */}
            <Route path="/products/:id" element={<Product />} />

            {/* 9 - Pagina de busca */}
            <Route path="/search" element={<Search />} />

            {/* 10 - direct */}
            <Route path="/company" element={<Navigate to="about" />} />

            {/* 7 - no match route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
