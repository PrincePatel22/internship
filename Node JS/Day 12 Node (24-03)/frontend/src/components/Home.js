import { react, useEffect, useState } from "react";
import axios from "axios";
import { FaUserEdit, FaUserMinus, FaUser, FaUserPlus } from "react-icons/fa";
import { CiImport, CiExport } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getusers");
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = async (id) => {
    localStorage.setItem("ID", id);
    navigation("/Profile");
  };

  const handleDelete = async (id) => {
    let choice = confirm("Are you sure you want to delete?");
    if (choice === true) {
      try {
        let res = await axios.post("http://localhost:8000/deleteuser", {
          id: id,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };
  const handleStatus = async (id, status) => {
    try {
      let res = await axios.post("http://localhost:8000/updatestatus", {
        id: id,
        status: status,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (id) => {
    localStorage.setItem("ID", id);
    navigation("/Edituser");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h4 style={{ color: "white" }}>User Dashboard</h4>
        <div style={{ marginLeft: "57%" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigation("/Adduser")}
            style={{ marginRight: "10px" }}
          >
            <CiExport /> Export User
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            <CiImport /> Import Users
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigation("/Adduser")}
          >
            <FaUserPlus /> Add User
          </button>
        </div>
      </nav>
      <table
        className="table table-striped table-bordered"
        style={{ margin: "70px 10px 10px 10px" }}
      >
        <thead className="bg-dark text-light text-center">
          <th>Code</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Photo</th>
          <th>Hobbies</th>
          <th>Added Date</th>
          <th>Status</th>
          <th>action</th>
        </thead>

        {users &&
          users.map((items) => {
            return (
              <tbody className="text-center">
                <td>{items.code}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                {items.gender == "M" ? <td>Male</td> : <td>Female</td>}
                <td>{items.country}</td>

                <td>
                  <img
                    src={"./images/" + items.photo}
                    className="rounded float-start"
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </td>
                <td>{items.hobbies}</td>
                <td>{items.dateadded}</td>
                {items.status == "Y" ? (
                  <td>
                    <button
                      type="button"
                      class="btn btn-link"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        handleStatus(items.recid, items.status);
                        getUsers();
                      }}
                    >
                      Active
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      type="button"
                      class="btn btn-link "
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        handleStatus(items.recid, items.status);
                        getUsers();
                      }}
                    >
                      Inactive
                    </button>
                  </td>
                )}
                <td>
                  <div>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => handleView(items.recid)}
                    >
                      <FaUser />
                    </button>
                    <button
                      className="btn btn-success m-1"
                      onClick={() => handleEdit(items.recid)}
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => {
                        handleDelete(items.recid);
                        getUsers();
                      }}
                    >
                      <FaUserMinus />
                    </button>
                  </div>
                </td>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Home;
