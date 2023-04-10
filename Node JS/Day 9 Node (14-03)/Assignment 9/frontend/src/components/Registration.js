import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstname == "") {
      alert("first name is required");
    } else if (!/^[A-Za-z]*$/.test(firstname)) {
      alert("Enter valid first name");
    } else if (lastname == "") {
      alert("last name is required");
    } else if (!/^[A-Za-z]*$/.test(lastname)) {
      alert("Enter valid last name");
    } else if (email == "") {
      alert("email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Enter valid email");
    } else if (phone == "") {
      alert("phone number is required");
    } else if (isNaN(phone) || phone.length < 10) {
      alert("Phone Number contain numeric value and length must be 10 digits.");
    } else if (dob == "") {
      alert("Birth date is required");
    } else if (gender == "") {
      alert("gender is required");
    } else if (password == "") {
      alert("password is required");
    } else if (password.length < 6) {
      alert("Minimum 6 digits password requied");
    } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      alert(
        "password should contain atleast one number and one special character"
      );
    } else if (confirmpassword == "") {
      alert("confirm Password is required");
    } else if (address == "") {
      alert("address is required");
    } else if (password == confirmpassword) {
      let baseUrl = "http://localhost:8000/registration";
      let response = axios.post(baseUrl, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        gender: gender,
        dob: dob,
        password: password,
        address: address,
      });
      console.log(response.data);
      setData(response.data);
      navigation("/Login");
    } else {
      alert("password not matched");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-left">
        <div className="form-field">
          <input
            type="submit"
            className="account"
            value="Have an Account?"
            onClick={() => navigation("/Login")}
          />
        </div>
      </div>
      <form className="form-right">
        <h2 className="text-uppercase">Registration form</h2>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="input-field"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="input-field"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label>Your Email</label>
          <input
            type="email"
            className="input-field"
            name="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="input-field"
            name="phone"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>birth date</label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="input-field"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>Gender</label>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                name="Gender"
                id="male"
                className="input-field"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>Male</label>
              <input
                type="radio"
                name="Gender"
                id="female"
                className="input-field"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>Female</label>
            </div>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              className="input-field"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="cpwd"
              id="cpwd"
              className="input-field"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="input-field"
            name="address"
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="form-field">
          <input
            type="submit"
            value="Register"
            className="register"
            name="register"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Registration;
