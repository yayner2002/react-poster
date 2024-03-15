import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <NavLink>
        <a href="/">Home</a>
      </NavLink>
      <li>
        <a href="/posts">Posts</a>
      </li>
      <li>
        <a href="/places">Places</a>
      </li>
    </ul>
  );
};

export default NavLinks;
