import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email == "") {
      alert("email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Enter valid email");
    } else if (password == "") {
      alert("Password is required");
    } else if (password.length < 6) {
      alert("Minimum 6 digits password requied");
    } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      alert(
        "password should contain atleast one number and one special character"
      );
    } else {
      try {
        let response = await axios.post("http://localhost:8000/login", {
          email: email,
          password: password,
        });
        console.log(response);
        if (response.data == "Please enter valid credentials") {
          alert("Please enter valid credentials");
          navigation("/Login");
        } else {
          let token = response.data;
          localStorage.setItem("token", token);
          navigation("/Dashboard");
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
          <label className="form-label" htmlFor="email">
            Email:{" "}
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <label className="form-label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <center>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </center>
        </center>
      </form>
    </div>
  );
}

export default Login;
