import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

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
      setDate(data.dateadded);
    }
  };

  const authorization = async () => {
    try {
      let response = await axios.post("http://localhost:8000/authorization", {
        headers: { token: localStorage.getItem("token") },
      });
      console.log(response);
      if (response.data) {
        navigation("/Profile");
        handleclick();
      } else {
        alert("You Are Unauthorized User");
        navigation("/Dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigation("/Login");
    }
    authorization();
  }, []);

  return (
    <table
      className="table table-striped"
      style={{ margin: "10px 400px 20px 400px", width: "fit-content" }}
    >
      <tbody>
        <tr>
          <td colSpan="2" className="text-center">
            <img
              className="rounded mx-auto d-block"
              src={"./logo192.png"}
              style={{ height: "150px", width: "150px" }}
            />
          </td>
        </tr>

        <tr>
          <th>Name</th>
          <td>
            {fname} {lname}
          </td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{email}</td>
        </tr>
        <tr>
          <th>Added Date</th>
          <td>{date}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Profile;
