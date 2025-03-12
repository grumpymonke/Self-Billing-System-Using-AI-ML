import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import ShoppingCart from "./components/SC/ShoppingCart";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Demo from "./components/Demo/Demo";
import LoginForm from "./components/Signup/LoginForm";
import { useDispatch } from "react-redux";
import PreviousOrders from "./PreviousOrders/PreviousOrders";

const mockUserData = [
  {
    username: "Manish",
    email: "manish@gmail.com",
    password: "MV",
    cart: [],
  },
  {
    username: "Afrid",
    email: "AFridi@gmail.com",
    password: "AF",
    cart: [],
  },
  {
    username: "Adnan",
    email: "adnan@gmail.com",
    password: "AD",
    cart: [],
  },
];

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInHandler = (details) => {
    for (let i of mockUserData) {
      if (i.email === details.email && i.password === details.password) {
        localStorage.setItem("username", i.username);
        dispatch({ type: "login", value: i });
        console.log("Logged in");
        navigate("/");
      }
    }
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/cart" element={<ShoppingCart />} exact />
        <Route
          path="/signin"
          element={<LoginForm onSignin={signInHandler} />}
          exact
        />
        <Route path="/previous-items" element={<PreviousOrders />} exact />
        <Route
          path="/add-product/:id"
          element={<Demo />}
          exact
        />
      </Routes>
    </div>
  );
};

export default App;
