import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          {/* <Route exact path="/Profile" element={<Profile />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
