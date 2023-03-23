import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigation = useNavigate();
  const [employees, setEmployees] = useState("");

  const getEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getemployee");
      let data = response.data;
      setEmployees(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEmployee = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/deleteemployee",
        { id: id }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployee();
    deleteEmployee();
  }, []);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginLeft: "80%" }}
            >
              HR
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => navigation("/Locations")}
            >
              Locations
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => navigation("/")}
            >
              Employees
            </button>
          </div>
        </nav>
      </div>
      <center>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginTop: "5%" }}
          onClick={() => navigation("/Addemployee")}
        >
          Add Employee
        </button>
      </center>
      <table className="table" style={{ margin: "20px 20px 10px 10px" }}>
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Work location</th>
            <th scope="col" rowSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {employees &&
            employees.map((items) => {
              return (
                <tr key={items.emp_id}>
                  <td>{items.emp_id}</td>
                  <td>{items.firstname}</td>
                  <td>{items.lastname}</td>
                  <td>{items.email}</td>
                  <td>{items.phone}</td>
                  <td>{items.gender}</td>
                  <td>{items.address}</td>
                  <td>{items.work_location}</td>
                  <td>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Edit"
                      onClick={() => {
                        props.setUpdateUser(items);
                        navigation("/Editemployee");
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="X"
                      onClick={() => deleteEmployee(items.emp_id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
