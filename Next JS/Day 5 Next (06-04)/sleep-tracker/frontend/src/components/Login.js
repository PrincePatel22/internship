import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email == "") {
      alert("email is required");
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return alert("Please enter valid email");
    } else if (password == "") {
      alert("Password is required");
    } else {
      try {
        let response = await axios.post("http://localhost:8000/login", {
          email: email,
          password: password,
        });
        if (response.data == "Please enter valid credentials") {
          alert("Please enter valid credentials");
          navigation("/login");
        } else {
          let token = response.data[0];
          let userid = response.data[1];
          localStorage.setItem("token", token);
          localStorage.setItem("uid", userid);
          navigation("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <h1>Login</h1>
          <br />
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="input-group mb-3"
            style={{ width: "300px", height: "35px" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="input-group mb-3"
            style={{ width: "300px", height: "35px" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <input type="submit" className="btn btn-primary" value="Submit" />
        </center>
      </form>
    </div>
  );
};

export default Login;
