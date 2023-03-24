import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from "./components/Adduser";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Adduser" element={<Adduser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
