import React, { useState } from "react";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

//   const user = useSelector((state) => state.user.user);
//   console.log();

  const submitHandler = (e) => {
    e.preventDefault();

    const users = {
      id: Math.random(),
      name,
      email,
      number,
      loggedIn: true,
    };
    console.log(users);
    dispatch(login(users));

    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={submitHandler}>
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Login;
