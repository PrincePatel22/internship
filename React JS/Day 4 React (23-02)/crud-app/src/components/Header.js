import React, { useState } from "react";

function Header({ setIsAdding }) {
  return (
    <header className="container">
      <h2>Employee Dashboard</h2>
      <div style={{ marginTop: "10px", marginBottom: "5px" }}>
        <button onClick={() => setIsAdding(true)} className="btn btn-dark">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header; 
