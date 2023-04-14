import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const navigation = useNavigate();
  const [sleeps, setSleeps] = useState("");

  const getSleeps = async () => {
    try {
      const res = await axios.post("http://localhost:8000/getsleeps", {
        id: localStorage.getItem("uid"),
      });
      setSleeps(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.post("http://localhost:8000/deletesleep", {
        id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
    navigation("/");
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      y: {
        suggestedMax: sleeps.length,
        title: {
          display: true,
          text: "Hours",
          font: {
            size: 15,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Sleep Date",
          font: {
            size: 15,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels =
    sleeps &&
    sleeps.map((items) => {
      return items.sleepdate;
    });

  const data = {
    labels,
    datasets: [
      {
        label: "Sleep Data",
        data:
          sleeps &&
          sleeps.map((items) => {
            return Number(items.sleepdiff.slice(0, 2));
          }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
      },
    ],
  };
  useEffect(() => {
    getSleeps();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link active link-dark"
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-dark"
              style={{ marginLeft: "950px" }}
              onClick={handleLogout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </nav>
      <div style={{ marginLeft: "40%", marginTop: "65px" }}>
        <button
          type="button"
          className="btn btn-dark"
          style={{ marginRight: "10px" }}
          onClick={() => navigation("/addsleep")}
        >
          Add Sleep
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            margin: "30px 0px 10px 20px",
            width: "50%",
          }}
        >
          <h3 style={{ marginBottom: "30px" }}>Sleep Duration</h3>
          <Bar options={options} data={data} />
        </div>
        <div
          style={{
            margin: "30px 0px 10px 70px",
            width: "fit-content",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>Sleep Stats</h3>
          <table
            className="table table-borderless border-dark table-striped table-hover"
            style={{
              width: "fit-content",
            }}
          >
            <thead>
              <tr>
                <th></th> <th>Time of Sleeps</th> <th>Wakeup Time</th>
                <th>Sleep Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {sleeps &&
                sleeps.map((items) => {
                  return (
                    <tr
                      style={{ textAlign: "center", verticalAlign: "middle" }}
                    >
                      <td>{items.sleepdate}</td>
                      <td>{items.asleeptime}</td>
                      <td>{items.wakeuptime}</td>
                      <td>{items.sleepdiff}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-dark "
                          style={{ textDecoration: "none" }}
                          onClick={() => {
                            handleDelete(items.recid);
                            getSleeps();
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
