import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
  //   const profile = async () => {
  //     const token = localStorage.getItem("token");
  //     const baseUrl = "http://localhost:8000/profile";
  //     if (token) {
  //       const responce = await axios.get(baseUrl, { headers: { token: token } });
  //     } else {
  //       return;
  //     }
  //   };

  return (
    <div style={{ margin: "10px 500px" }}>
      <h1>Home Page</h1>
      <div style={{ marginTop: "20px" }}>
        <Link
          to="/Register"
          style={{
            textDecoration: "none",
            borderRadius: "5px",
            border: "1px solid black",
            color: "white",
            backgroundColor: "black",
            padding: "10px",
          }}
        >
          Register
        </Link>{" "}
        &nbsp;
        <Link
          to="/Login"
          style={{
            textDecoration: "none",
            borderRadius: "5px",
            border: "1px solid black",
            color: "white",
            backgroundColor: "black",
            padding: "10px",
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
