import React from "react";

import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  function category() {
    navigate("/category");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="#">

      </a>
      <div id="home">
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-secondary" onClick={category}>
          Category
        </button>
      </div>
    </nav>
  );
}

export default Header;
