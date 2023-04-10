import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();
  const token = localStorage.getItem("token");

  const handleclick = async () => {
    const baseUrl = "http://localhost:8000/profile";
    if (token) {
      const response = await axios.get(baseUrl, {
        headers: { token: token },
      });
      let data = response.data[0];
      setFname(data.firstname);
      setLname(data.lastname);
      setEmail(data.email);
    }
  };
  useEffect(() => {
    if (!token) {
      navigation("/Login");
    }
    handleclick();
  }, []);

  return (
    <>
      <center>
        <br />
        <br /> <br />
        <div>First name : {fname}</div>
        <div>Last name : {lname}</div>
        <div>Email : {email}</div>
      </center>
    </>
  );
};
export default Profile;
