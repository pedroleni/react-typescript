import "./Nav.css";

import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../Contexts/UserContext";

const Nav = () => {
  const { user, logout } = useContext(UserContext);
  useEffect(() => {}, [user]);

  return (
    <>
      {user && (
        <nav>
          <ul>
            <li>
              <NavLink to="/manga">MANGA</NavLink>
            </li>
            <li>
              <NavLink to="anime">ANIME</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={() => logout()} className="logout">
                LOGOUT
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
