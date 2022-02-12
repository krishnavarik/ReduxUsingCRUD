import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editUsers, updateUser } from "../redux/action";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  console.log(name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user1 = useSelector((state) => state.users.users);
  console.log(user1);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(editUsers(id));
  }, []);

  useEffect(() => {
    if (user1) {
      setName(user1.name);
      setEmail(user1.email);
      setContact(user1.contact);
      setAddress(user1.address);
    }
  }, [user1]);

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
    dispatch(updateUser(users, id));
    navigate("/");
  };

  return (
    <div>
      <button className="btn">
        <Link to="/">Go Back</Link>
      </button>
      <h1>Edit User</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={nameHandler} />
        <br />
        <input type="email" value={email} onChange={emailHandler} />
        <br />
        <input type="number" onChange={contactHandler} value={contact} />
        <br />
        <input type="text" onChange={addressHandler} value={address} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EditUser;
