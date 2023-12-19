import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/me" activeClassName="active-link">
            Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/preferences" activeClassName="active-link">
            Preferences
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
