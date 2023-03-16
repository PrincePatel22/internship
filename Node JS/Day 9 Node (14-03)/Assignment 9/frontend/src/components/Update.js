import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = (props) => {
  const navigation = useNavigate();
  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log(props.firstname);

    if (props.firstname == "") {
      alert("first name is required");
    } else if (props.lastname == "") {
      alert("last name is required");
    } else if (props.email == "") {
      alert("email is required");
    } else if (props.phone == "" && !isNaN(props.phone)) {
      alert("phone number is required");
    } else if (props.dob == "") {
      alert("Birth date is required");
    } else if (props.gender == "") {
      alert("gender is required");
    } else if (props.password == "") {
      alert("password is required");
    } else if (props.address == "") {
      alert("address is required");
    }
    if (
      props.firstname != "" &&
      props.lastname != "" &&
      props.email != "" &&
      props.password != "" &&
      props.phone != "" &&
      props.dob != "" &&
      props.gender != "" &&
      props.address != ""
    ) {
      let baseUrl = "http://localhost:8000/update";
      let response = await axios.put(baseUrl, {
        firstname: props.firstname,
        lastname: props.lastname,
        email: props.email,
        phone: props.phone,
        gender: props.gender,
        dob: props.dob,
        password: props.password,
        address: props.address,
      });
      console.log(response.data);
      navigation("/Profile");
    }
  };
  return (
    <div class="wrapper">
      <form class="form-right">
        <h2 class="text-uppercase">Update information</h2>
        <div class="row">
          <div class="col-sm-6 mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              class="input-field"
              defaultValue={props.firstname}
              onChange={(e) => {
                props.setFirstname(e.target.value);
              }}
            />
          </div>
          <div class="col-sm-6 mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="input-field"
              defaultValue={props.lastname}
              onChange={(e) => {
                props.setLastname(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3">
          <label>Your Email</label>
          <input
            type="email"
            class="input-field"
            name="email"
            defaultValue={props.email}
            disabled
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            class="input-field"
            name="phone"
            defaultValue={props.phone}
            onChange={(e) => {
              props.setPhone(e.target.value);
            }}
          />
        </div>
        <div class="row">
          <div class="col-sm-6 mb-3">
            <label>birth date</label>
            <input
              type="date"
              name="dob"
              id="dob"
              class="input-field"
              value={props.dob}
              onChange={(e) => {
                props.setDob(e.target.value);
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
                defaultChecked={props.gender == "male"}
                onChange={(e) => {
                  props.setGender(e.target.value);
                }}
              />
              <label>Male</label>
              <input
                type="radio"
                name="Gender"
                id="female"
                className="input-field"
                value="female"
                defaultChecked={props.gender == "female"}
                onChange={(e) => {
                  props.setGender(e.target.value);
                }}
              />
              <label>Female</label>
            </div>
          </div>{" "}
        </div>
        <div class="row">
          <div class="col-sm-6 mb-3">
            <label>Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              class="input-field"
              defaultValue={props.password}
              onChange={(e) => {
                props.setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="mb-3">
          <label>Address</label>
          <input
            type="text"
            class="input-field"
            name="address"
            defaultValue={props.address}
            onChange={(e) => {
              props.setAddress(e.target.value);
            }}
          />
        </div>
        <div class="mb-3"></div>
        <div class="form-field">
          <input
            type="submit"
            value="update"
            class="register"
            name="register"
            onClick={handleUpdate}
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
