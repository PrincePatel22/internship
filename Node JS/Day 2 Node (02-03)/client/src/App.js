import "./App.css";
import axios from "axios";

function App() {
  const primeNumber = async (e) => {
     e.preventDefault();
    let input = document.getElementById("input").value;
    let localHost = "http://localhost:8000/primeNumber";
    let display = document.getElementById("display");
    try {
      const response = await axios.post(localHost, { input: +input });
      display.innerHTML = response.data + ",";
    } catch (error) {
      console.log(error);
    }
  };

  const getPower = async (e) => {
    e.preventDefault();
    let localHost = "http://localhost:8000/findPower";
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let powerDis = document.getElementById("power-display");
    try {
      const response = await axios.post(localHost, { first: +first, second: +second });
      powerDis.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="div">
        <h2>Find Prime Number</h2>
        <form name="form" method="get" onSubmit={primeNumber}>
          <label>Enter Value: </label>
          <input
            type="text"
            name="text"
            placeholder="Enter Any value"
            id="input"
          ></input>
          &nbsp;
          <button type="submit">Submit</button>
          <p id="display"></p>
        </form>
      </div>
      <div className="div">
        <h2>Find power of two value</h2>
        <form name="form" method="get" onSubmit={getPower}>
          <input
            type="text"
            name="text"
            placeholder="Enter First value"
            id="first"
          ></input>
          &nbsp;
          <input
            type="text"
            name="text"
            placeholder="Enter power value"
            id="second"
          ></input>
          &nbsp;
          <button type="submit">Result</button>
          <p id="power-display"></p>
        </form>
      </div>
    </>
  );
}

export default App;
