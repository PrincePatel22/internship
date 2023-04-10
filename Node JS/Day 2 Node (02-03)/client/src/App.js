import "./App.css";
import axios from "axios";

function App() {
  const primeNumber = async (e) => {
    let input = document.getElementById("input").value;
    e.preventDefault();
    if (input === "") {
      alert("Enter Any value");
    } else if (input.match(/\ /)) {
      alert("Enter Any value");
    } else if (isNaN(input)) {
      alert("Enter only numeric value");
    } else {
      let localHost = "http://localhost:8000/primeNumber";
      let display = document.getElementById("display");
      try {
        const response = await axios.post(localHost, { input: +input });
        display.innerHTML = response.data + ",";
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getPower = async (e) => {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    e.preventDefault();
    if (first === "") {
      alert("Enter first value");
    } else if (first.match(/\ /)) {
      alert("Enter value in first text box");
    } else if (isNaN(first)) {
      alert("Enter numeric value in first text box");
    } else if (second === "") {
      alert("Enter second value");
    } else if (second.match(/\ /)) {
      alert("Enter value in second text box");
    } else if (isNaN(second)) {
      alert("Enter numeric value in second text box");
    } else {
      let localHost = "http://localhost:8000/findPower";
      let powerDis = document.getElementById("power-display");
      try {
        const response = await axios.post(localHost, {
          first: +first,
          second: +second,
        });
        powerDis.innerHTML = response.data;
      } catch (error) {
        console.log(error);
      }
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
