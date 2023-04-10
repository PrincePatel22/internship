import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstname === "") {
      alert("first name is required");
    } else if (!/^[A-Za-z]*$/.test(firstname)) {
      alert("Enter valid first name");
    } else if (lastname === "") {
      alert("last name is required");
    } else if (!/^[A-Za-z]*$/.test(lastname)) {
      alert("Enter valid last name");
    } else if (email === "") {
      alert("email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Enter valid email");
    } else if (password === "") {
      alert("password is required");
    } else if (password.length < 6) {
      alert("Minimum 6 digits password requied");
    } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      alert(
        "password should contain atleast one number and one special character"
      );
    } else if (confirmpassword === "") {
      alert("confirm Password is required");
    } else if (password === confirmpassword) {
      let baseUrl = "http://localhost:8000/register";
      let response = axios.post(baseUrl, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      alert("User registered successfully");
      navigation("/");
    } else {
      alert("password not matched");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="row g-3">
        <center>
          <h1>Register</h1>
          <label htmlFor="firstname" className="form-label">
            First Name:
          </label>
          &nbsp;
          <input
            id="firstname"
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="lastname" className="form-label">
            Last Name:
          </label>
          &nbsp;
          <input
            id="lastname"
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          &nbsp;
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
            Password:
          </label>
          &nbsp;
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
          <label htmlFor="confirmpassword">Confirm Password: </label>&nbsp;
          <input
            id="confirmpassword"
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <input type="button" className="btn btn-primary" value="Submit" />
        </center>
      </form>
    </div>
  );
}

export default Register;
