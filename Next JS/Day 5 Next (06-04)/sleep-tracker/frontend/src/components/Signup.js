import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstname == "") {
      alert("first name is required");
    } else if (lastname == "") {
      alert("last name is required");
    } else if (email == "") {
      alert("email is required");
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return alert("Please enter valid email");
    } else if (password == "") {
      alert("password is required");
    } else if (password.length < 6) {
      return alert("Password length must be 6 digit");
    } else if (confirmpassword == "") {
      alert("confirm Password is required");
    } else if (
      password == confirmpassword &&
      firstname != "" &&
      lastname != "" &&
      email != "" &&
      password != ""
    ) {
      let response = axios.post("http://localhost:8000/signup", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      alert("User Signup Successful");
      navigation("/");
    } else {
      alert("password not matched");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <h1>Sign Up</h1>
          <br />
          <input
            id="firstname"
            type="text"
            name="firstname"
            style={{ width: "300px", height: "35px" }}
            className="input-group mb-3"
            placeholder="Enter First name"
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Enter Last name"
            style={{ width: "300px", height: "35px" }}
            className="input-group mb-3"
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <input
            id="email"
            type="text"
            name="email"
            className="input-group mb-3"
            style={{ width: "300px", height: "35px" }}
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            id="password"
            type="password"
            className="input-group mb-3"
            style={{ width: "300px", height: "35px" }}
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <input
            id="confirmpassword"
            type="password"
            name="confirmpassword"
            className="input-group mb-3"
            style={{ width: "300px", height: "35px" }}
            placeholder="Enter Confirm Password"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <input type="submit" className="btn btn-primary" value="Submit" />
        </center>
      </form>
    </div>
  );
};

export default Signup;
