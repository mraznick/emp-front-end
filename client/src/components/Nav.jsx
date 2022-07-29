import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="/pictures">Artwork</NavLink>
        <br></br>
        <NavLink to="/comments">Comments</NavLink>
        <br></br>
        <NavLink to="/users">Users</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
