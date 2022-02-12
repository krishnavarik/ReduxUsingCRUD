import React from "react";
import "./Logout.css";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
function Logout() {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>
        Welcome <span className="user__name">{name}</span>
      </h1>
      <button className="logout__button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
