import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="/picture">Artwork</NavLink>
        <br></br>
        <NavLink to="/comments">Comments</NavLink>
        <br></br>
        <NavLink to="/users">Users</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
