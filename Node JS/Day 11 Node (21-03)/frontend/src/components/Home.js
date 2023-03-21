import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();

  return (
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
            onClick={() => navigation("/Employees")}
          >
            Employees
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
