import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = (props) => {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");

  const handleclick = async () => {
    const baseUrl = "http://localhost:8000/profile";
    if (token) {
      const response = await axios.get(baseUrl, {
        headers: { token: token },
      });
      let data = response.data[0];
      props.setFirstname(data.firstname);
      props.setLastname(data.lastname);
      props.setEmail(data.email);
      props.setPhone(data.phone);
      props.setGender(data.gender);
      props.setDob(data.dob);
      props.setPassword(data.password);
      props.setAddress(data.address);
    }
  };
  useEffect(() => {
    if (!token) {
      navigation("/Login");
    }
    handleclick();
  }, []);

  const handleUpdate = () => {
    navigation("/Update");
  };
  return (
    <>
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone number</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.gender}</td>
            <td>{props.dob}</td>
            <td>{props.password}</td>
            <td>{props.address}</td>
            <td>
              <input
                type="submit"
                className="btn btn-primary"
                value="Edit"
                onClick={handleUpdate}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Profile;
