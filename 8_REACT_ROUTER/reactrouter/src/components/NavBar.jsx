import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink to="about">Sobre</NavLink>

      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>*/}
    </nav>
  );
};

export default NavBar;
