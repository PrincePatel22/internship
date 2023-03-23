import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hr from "./components/Hr";
import Locations from "./components/Locations";
import Addlocation from "./components/Addlocation";
import Addemployee from "./components/Addemployee";
import Editemployee from "./components/Editemployee";

function App() {
  const [updateUser, setUpdateUser] = useState();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setUpdateUser={setUpdateUser} />}
          ></Route>
          <Route exact path="/Hr" element={<Hr />}></Route>
          <Route exact path="/Locations" element={<Locations />}></Route>
          <Route exact path="/Addlocation" element={<Addlocation />}></Route>
          <Route exact path="/Addemployee" element={<Addemployee />}></Route>
          <Route
            exact
            path="/Editemployee"
            element={<Editemployee updateUser={updateUser} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
