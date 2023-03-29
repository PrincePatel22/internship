import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="#"></a>
      <div id="home">
        &nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-secondary"
          onClick={() => navigation("/category")}
        >
          Categories
        </button>
      </div>
    </nav>
  );
};

export default Header;
