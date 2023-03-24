import { react, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigation = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h4 style={{color:"white"}}>User Dashboard</h4>
          <button type="button" className="btn btn-primary" style={{marginLeft:"78%"}} onClick={()=>navigation("/Adduser")}>
            Add User
          </button>
      </nav>
    </div>
  );
};

export default Home;
