import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/addUser" element={<AddUser></AddUser>}></Route>
      <Route path="/edituser/:id" element={<EditUser></EditUser>}></Route>
    </Routes>
  );
};

export default App;
