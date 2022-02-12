import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  const user = useSelector((state) => state.user.user);

  console.log(user);
  return <>{!user ? <Login></Login> : <Logout />}</>;
}

export default App;
