import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (email == "") {
      alert("email is required");
    } else if (password == "") {
      alert("Password is required");
    } else {
      try {
        let response = await axios.post("/api/login", {
          email: email,
          password: password,
        });
        console.log(response.data);
        if (response.data == "Please enter valid credentials") {
          alert("Please enter valid credentials");
          navigation.push("/Login");
        } else {
          let token = response.data;
          localStorage.setItem("token", token);
          navigation.push("/Profile");
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
