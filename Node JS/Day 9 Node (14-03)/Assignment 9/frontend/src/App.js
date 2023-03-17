import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Update from "./components/Update";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Orderview from "./components/Orderview";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Registration />}></Route>
          <Route exact path="/Cart" element={<Cart />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Orders" element={<Orders />}></Route>
          <Route exact path="/Orderview" element={<Orderview />}></Route>
          <Route
            exact
            path="/Profile"
            element={
              <Profile
                firstname={firstname}
                setFirstname={setFirstname}
                lastname={lastname}
                setLastname={setLastname}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                gender={gender}
                setGender={setGender}
                dob={dob}
                setDob={setDob}
                password={password}
                setPassword={setPassword}
                address={address}
                setAddress={setAddress}
              />
            }
          ></Route>
          <Route
            exact
            path="/Update"
            element={
              <Update
                firstname={firstname}
                setFirstname={setFirstname}
                lastname={lastname}
                setLastname={setLastname}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                gender={gender}
                setGender={setGender}
                dob={dob}
                setDob={setDob}
                password={password}
                setPassword={setPassword}
                address={address}
                setAddress={setAddress}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
