import "./Nav.css";

import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../Contexts/UserContext";
import Avatar from "./Avatar";

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
              <li className="logout">
                <NavLink to="/" onClick={() => logout()} className="logout">
                  <img
                    className="iconLogout"
                    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1678462138/logout_FILL0_wght400_GRAD0_opsz48_dpfnju.png"
                    alt=""
                  />
                </NavLink>
              </li>

              <Avatar />
              <h2 className="titleUser">{`  Hi ${user}`}</h2>
            </div>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
