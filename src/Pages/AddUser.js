import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUsers } from "../redux/action";
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  console.log(name);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const contactHandler = (e) => {
    setContact(e.target.value);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const users = {
      id: Math.random(),
      name,
      email,
      contact,
      address,
    };

    console.log("hekke");
    dispatch(addUsers(users));
    navigate("/");
  };
  return (
    <div>
      <button className="btn">
        <Link to="/">Go Back</Link>
      </button>
      <h1>AddUsers</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={nameHandler} required />
        <br />
        <input type="email" value={email} onChange={emailHandler} required />
        <br />
        <input
          type="number"
          onChange={contactHandler}
          value={contact}
          required
        />
        <br />
        <input type="text" onChange={addressHandler} value={address} required />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddUser;
