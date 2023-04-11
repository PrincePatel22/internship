import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Dashboard = () => {
  const navigation = useNavigate();

  const authorization = async () => {
    try {
      let response = await axios.post("http://localhost:8000/authorization", {
        headers: { token: localStorage.getItem("token") },
      });
      console.log(response);
      if (response.data) {
        navigation("/Profile");
      } else {
        alert("You Are Unauthorized User");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h4 style={{ color: "white" }}>User Dashboard</h4>
        <div style={{ marginLeft: "78%" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => authorization()}
          >
            My profile
          </button>
        </div>
      </nav>
      <h4
        style={{ marginTop: "5%", marginBottom: "20px", textAlign: "center" }}
      >
        Quote of the day
      </h4>
      <div className="card" style={{ margin: "0 400px" }}>
        <h5 className="card-header">Quote</h5>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              "The future belongs to those who believe in the beauty of their
              dreams."
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Eleanor Roosevelt</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};
