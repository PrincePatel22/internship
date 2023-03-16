import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
