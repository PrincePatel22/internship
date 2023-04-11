import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <h4 style={{ color: "#fff" }}>Sleep Tracker app</h4>
        <div style={{ marginLeft: "65%" }}>
          <button
            type="button"
            className="btn btn-dark"
            style={{ marginRight: "10px" }}
            onClick={() => navigation("/signup")}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-dark"
            style={{ marginRight: "10px" }}
            onClick={() => navigation("/login")}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => navigation("/addsleep")}
          >
            Add Sleep
          </button>
        </div>
      </nav>
      <div
        className="card"
        style={{
          marginTop: "5%",
          marginBottom: "20px",
          marginLeft: "20%",
          width: "50%",
        }}
      >
        <img
          src="./images/sleep.png"
          className="rounded mx-auto d-block"
          alt="sleep"
          style={{ height: "150px", width: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Banefits of good sleep</h5>
          <p className="card-text">
            Get sick less often. Stay at a healthy weight. <br />
            Lower your risk for serious health problems, like diabetes and heart
            disease. <br />
            Reduce stress and improve your mood. <br />
            Think more clearly and do better in school and at work. <br />
            Get along better with people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
