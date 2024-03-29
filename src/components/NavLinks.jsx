import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <NavLink to="/">Home</NavLink>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/places">Places</NavLink>
      </li>
      <li>
        <NavLink to="/all-posts">All Posts</NavLink>

      </li>
      <li>
        <NavLink to="/sign-in">Login</NavLink>
        
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
        
      </li>
    </ul>
  );
};

export default NavLinks;
