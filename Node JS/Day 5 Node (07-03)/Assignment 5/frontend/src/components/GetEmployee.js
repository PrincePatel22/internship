import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { Button, Table } from "react-bootstrap";

const GetEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployee = async (event) => {
    event.preventDefault();
    try {
      let res = await axios.get(
        "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees"
      );
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        style={{ margin: "5px 600px" }}
        onClick={fetchEmployee}
      >
        Get Employee
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {employees.length != 0 ? (
            employees.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.createdAt}</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default GetEmployee;
