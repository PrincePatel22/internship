import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Addemployee from "./components/Addemployee";
import Editemployee from "./components/Editemployee";
import Locations from "./components/Locations";
import Editlocation from "./components/Editlocation";
import Addlocation from "./components/Addlocation";
import Hr from "./components/Hr";
import Addhr from "./components/Addhr";
import Edithr from "./components/Edithr";

function App() {
  const [updateUser, setUpdateUser] = useState();
  const [updateLocation, setUpdateLocation] = useState();
  const [updatehr, setUpdatehr] = useState();

  useEffect(() => {
    console.log(updatehr);
  }, [updatehr]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setUpdateUser={setUpdateUser} />}
          ></Route>
          <Route exact path="/Hr" element={<Hr setUpdatehr={setUpdatehr}/>}></Route>
          <Route exact path="/Addhr" element={<Addhr />}></Route>
          <Route exact path="/Edithr" element={<Edithr updatehr={updatehr}/>}></Route>
          <Route
            exact
            path="/Locations"
            element={<Locations setUpdateLocation={setUpdateLocation} />}
          ></Route>
          <Route
            exact
            path="/Editlocation"
            element={<Editlocation updateLocation={updateLocation} />}
          ></Route>

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
