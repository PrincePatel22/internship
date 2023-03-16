import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import axios from "axios";

const Home = () => {
  const navigation = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigation("/Home");
    } else {
      navigation("/Login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigation("/Login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => navigation("/Profile")}
          >
            My Profile
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginRight: "80%" }}
            onClick={() => navigation("/Cart")}
          >
            My cart
          </button>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
