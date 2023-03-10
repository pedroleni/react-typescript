import "./Nav.css";

import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../Contexts/UserContext";
const Nav = () => {
  const { logout, user } = useContext(UserContext);
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
            <div className="containerUser">
              <li>
                <NavLink to="/" onClick={() => logout()} className="logout">
                  LOGOUT
                </NavLink>
              </li>
              <img className="avatar" src={localStorage.getItem("urlIMG")} alt="" />
            </div>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
