import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <NavLink to="/">
        Home
      </NavLink>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/places">Places</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
