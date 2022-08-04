import { NavLink } from "react-router-dom";
import { signOut } from "../services/users.js";

const Nav = () => {
  return (
      <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pictures">Artwork</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Create Account</NavLink>
        <NavLink to="/signout" onClick={signOut}>Sign Out</NavLink>
      </div>
  );
};

export default Nav;
