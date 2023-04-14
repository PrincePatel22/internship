import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Addsleep = (event) => {
  const [date, setDate] = useState("");
  const [sleeptime, setSleeptime] = useState("");
  const [wakeuptime, setWakeuptime] = useState("");
  const navigation = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/addsleep", {
        date: date,
        sleeptime: sleeptime,
        wakeuptime: wakeuptime,
        id: localStorage.getItem("uid"),
      });
      navigation("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div style={{ margin: "20px 0 0 500px", width: "20%" }}>
        <div style={{ marginBottom: "10px" }}>
          <label className="form-label">Date </label>
          <input
            type="date"
            className="form-control"
            placeholder="date"
            name="date"
            id="date"
            aria-label="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label className="form-label">Sleep Time </label>
          <input
            type="time"
            name="sleeptime"
            className="form-control"
            placeholder="sleeptime"
            aria-label="sleeptime"
            onChange={(e) => setSleeptime(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label className="form-label">Wakeup Time </label>
          <input
            type="time"
            className="form-control"
            name="wakeuptime"
            placeholder="wakeuptime"
            aria-label="wakeuptime"
            onChange={(e) => setWakeuptime(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-dark"
          style={{ marginLeft: "20px" }}
          onClick={handleAdd}
        >
          Add sleep
        </button>
        <button
          type="button"
          className="btn btn-dark"
          style={{ marginLeft: "20px" }}
          onClick={() => navigation("/dashboard")}
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default Addsleep;
