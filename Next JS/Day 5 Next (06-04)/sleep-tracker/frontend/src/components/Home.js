import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <h4 style={{ color: "#fff" }}>Sleep Tracker app</h4>
        <div style={{ marginLeft: "72%" }}>
          <button
            type="button"
            className="btn btn-dark"
            style={{ marginRight: "10px" }}
            onClick={() => navigation("/Signup")}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-dark"
            style={{ marginRight: "10px" }}
            onClick={() => navigation("/Login")}
          >
            Login
          </button>
          {/* <button type="button" className="btn btn-primary">
            Add User
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Home;
