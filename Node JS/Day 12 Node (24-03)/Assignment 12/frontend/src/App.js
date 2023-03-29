import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Profile from "./components/Profile";
import Edituser from "./components/Edituser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Adduser" element={<Adduser />}></Route>
          <Route exact path="/Profile" element={<Profile />}></Route>
          <Route exact path="/Edituser" element={<Edituser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
