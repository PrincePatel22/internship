import { react, useEffect, useState } from "react";
import axios from "axios";
import { VscChevronLeft } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState("");
  const navigation = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.post("http://localhost:8000/getuser", {
        id: localStorage.getItem("ID"),
      });
      setUser(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <button
        type="button"
        class="btn btn-dark"
        style={{ margin: "20px 0 0 100px" }}
        onClick={() => {
          navigation("/");
        }}
      >
        <VscChevronLeft size={25}/>
      </button>
      {user && (
        <table
          className="table table-striped"
          style={{ margin: "10px 400px 20px 400px", width: "fit-content" }}
        >
          <tbody>
            <tr>
              <td colSpan="2" className="text-center">
                <img
                  className="rounded mx-auto d-block"
                  src={"./images/" + user.photo}
                  style={{ height: "150px", width: "150px" }}
                />
              </td>
            </tr>
            <tr>
              <th style={{ width: "300px" }}>Code</th>
              <td>{user.code}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                {user.firstname} {user.lastname}
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{user.gender == "M" ? <td>Male</td> : <td>Female</td>}</td>
            </tr>
            <tr>
              <th>Hobbies</th>
              <td>{user.hobbies}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{user.country}</td>
            </tr>
            <tr>
              <th>Added Date</th>
              <td>{user.dateadded}</td>
            </tr>
            <tr>
              <th>Updated Date</th>
              <td>{user.dateupdated}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{user.state == "Y" ? <td>Active</td> : <td>Inactive</td>}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;
