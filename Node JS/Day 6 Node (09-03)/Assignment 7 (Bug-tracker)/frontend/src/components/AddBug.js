import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function Addbug() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [bug, setBug] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title == "") {
      return alert("Please enter title");
    } else if (description == "") {
      return alert("Please enter description");
    } else if (assignee == "") {
      return alert("Please enter assignee");
    }

    const baseUrl = "http://localhost:8000/addbug";
    const responce = axios.post(baseUrl, {
      title: title,
      description: description,
      assignee: assignee,
    });
  };

  const getdata = async () => {
    const baseUrl = "http://localhost:8000/getdata";
    const responce = await axios.get(baseUrl);
    const bug = responce.data;
    console.log(bug);
    setBug(bug);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <center>
          <h3>Add Bug</h3>
        </center>
        <div className="col">
          <label>Title: </label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <label>Description: </label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <label>Assignee: </label>
          <input
            className="form-control"
            type="text"
            name="assignee"
            value={assignee}
            onChange={(e) => {
              setAssignee(e.target.value);
            }}
          />
        </div>
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              {/* <th>Date</th>
              <th>Time</th> */}
              <th>Assignee</th>
              <th>left days</th>
            </tr>
          </thead>
          <tbody>
            {bug && bug.length > 0 ? (
              bug.map((data) => (
                <tr
                  key={data.id}
                  style={{
                    backgroundColor: data.difference >= 3 ? "#e63946" : "white",
                  }}
                >
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  {/* <td>{data.date}</td>
                  <td>{data.time}</td> */}
                  <td>{data.assignee}</td>
                  <td>{3 - data.difference}</td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Addbug;
