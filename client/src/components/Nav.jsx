import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pictures">Artwork</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Create Account</NavLink>
      </div>
  );
};

export default Nav;
