import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Profile() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useRouter();
  const token = localStorage.getItem("token");

  const handleclick = async () => {
    const baseUrl = "/api/profile";
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
      navigation.push("/Login");
    }
    handleclick();
  }, []);

  return (
    <>
      <div>
        <table className="table table-striped">
          <tr>
            <th>First Name</th>
            <td>{fname}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{lname}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
