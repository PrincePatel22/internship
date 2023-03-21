import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/hr" element={<Hr />}></Route>
      <Route exact path="/Employee" element={<Employee />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
