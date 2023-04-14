import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Addsleep from "./components/Addsleep";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>{" "}
          <Route exact path="/addsleep" element={<Addsleep />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
