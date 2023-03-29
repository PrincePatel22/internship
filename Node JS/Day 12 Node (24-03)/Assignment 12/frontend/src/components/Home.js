import { react, useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { FaUserEdit, FaUserMinus, FaUser, FaUserPlus } from "react-icons/fa";
import { CiImport, CiExport } from "react-icons/ci";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  const [users, setUsers] = useState();

  const [filterUser, setFilterUser] = useState();
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [status, setStatus] = useState("");

  const result = filterUser && filterUser.length;
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(result / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getusers");
      console.log(res.data);
      setUsers(res.data);
      setFilterUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = async (id) => {
    localStorage.setItem("ID", id);
    navigation("/Profile");
  };

  const handleDelete = async (id) => {
    let choice = confirm("Are you sure you want to delete?");
    if (choice === true) {
      try {
        let res = await axios.post("http://localhost:8000/deleteuser", {
          id: id,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };
  const handleStatus = async (id, status) => {
    try {
      let res = await axios.post("http://localhost:8000/updatestatus", {
        id: id,
        status: status,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (id) => {
    localStorage.setItem("ID", id);
    navigation("/Edituser");
  };

  const handleExport = async () => {
    try {
      let res = await axios.post("http://localhost:8000/exportusers", {
        users: users,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImport = async () => {
    try {
      let res = await axios.get("http://localhost:8000/importusers");
    } catch (error) {
      console.log(error);
    }
  };

  const searchFilter = () => {
    let temp = [];
    if (search == "") {
      setFilterUser(users);
    } else {
      for (let i = 0; i < filterUser.length; i++) {
        if (
          filterUser[i].name.toLowerCase().includes(search.toLowerCase()) ||
          filterUser[i].code.toLowerCase().includes(search.toLowerCase()) ||
          filterUser[i].email.toLowerCase().includes(search.toLowerCase())
        ) {
          temp.push(filterUser[i]);
        }
      }
      setFilterUser(temp);
    }
  };

  const statusFilter = () => {
    if (filterUser) {
      let temp = [];
      for (let i = 0; i < filterUser.length; i++) {
        if (filterUser[i].status == "Y" && status == "Active") {
          temp.push(filterUser[i]);
        } else if (filterUser[i].status == "N" && status == "Inactive") {
          temp.push(filterUser[i]);
        }
      }
      setFilterUser(temp);
    }
  };

  const handleHobbies = () => {
    let temp = [];
    const hobbies = document.getElementsByName("hobbies");
    for (let i = 0; i < hobbies.length; i++) {
      if (hobbies[i].checked == true) {
        temp.push(hobbies[i].value);
      }
    }
    setHobbies(temp);
  };

  const handleReset = () => {
    setFilterUser(users);
  };

  useEffect(() => {
    statusFilter();
  }, [status]);

  useEffect(() => {
    searchFilter();
  }, [search]);

  useEffect(() => {
    let temp = [];
    if (gender == "") {
      temp = filterUser;
    } else {
      if (gender == "F" || gender == "M") {
        for (let i = 0; i < filterUser.length; i++) {
          if (filterUser[i].gender == gender) {
            temp.push(filterUser[i]);
          }
        }
      } else {
        temp = filterUser;
      }
    }
    setFilterUser(temp);
  }, [gender]);

  useEffect(() => {
    let search = filterUser;
    let temp = [];
    for (let i = 0; i < hobbies.length; i++) {
      for (let j = 0; j < search.length; j++) {
        if (
          search[j].hobbies.toLowerCase().includes(hobbies[i].toLowerCase())
        ) {
          temp.push(search[j]);
        }
      }
      search = temp;
    }
    setFilterUser(search);
  }, [hobbies]);

  useEffect(() => {
    getUsers();
    var checkList = document.getElementById("list1");
    checkList.getElementsByClassName("anchor")[0].onclick = (event) => {
      if (checkList.classList.contains("visible"))
        checkList.classList.remove("visible");
      else {
        checkList.classList.add("visible");
      }
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h4 style={{ color: "white" }}>User Dashboard</h4>
        <div style={{ marginLeft: "57%" }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
            onClick={handleExport}
          >
            <CiExport /> Export User
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
            onClick={() => {
              handleImport();
              getUsers();
            }}
          >
            <CiImport /> Import Users
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigation("/Adduser")}
          >
            <FaUserPlus /> Add User
          </button>
        </div>
      </nav>
      <div
        style={{
          margin: "70px 10px 5px 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          className="form-control col-md-3"
          style={{ width: "15%" }}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        &nbsp; &nbsp;
        <div>
          <input
            type="radio"
            id="male"
            className="m-1"
            name="gender"
            value="M"
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            id="female"
            className="m-1"
            name="gender"
            value="F"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            id="all"
            className="m-1"
            name="gender"
            value="A"
            onChange={(e) => {
              setGender(e.target.value);
              getUsers();
            }}
          />
          All
        </div>
        &nbsp; &nbsp;
        <div id="list1" class="dropdown-check-list">
          <span class="anchor">Select hobbies</span>
          <ul class="items">
            <li>
              <input
                type="checkbox"
                id="Reading"
                name="hobbies"
                value="Reading"
                onChange={handleHobbies}
              />
              Reading
            </li>
            <li>
              <input
                type="checkbox"
                id="Travelling"
                name="hobbies"
                value="Travelling"
                onChange={handleHobbies}
              />
              Travelling
            </li>
            <li>
              <input
                type="checkbox"
                id="Football"
                name="hobbies"
                value="Football"
                onChange={handleHobbies}
              />
              Football
            </li>
            <li>
              <input
                type="checkbox"
                id="Cricket"
                name="hobbies"
                value="Cricket"
                onChange={handleHobbies}
              />
              Cricket
            </li>
            <li>
              <input
                type="checkbox"
                id="Dancing"
                name="hobbies"
                value="Dancing"
                onChange={handleHobbies}
              />
              Dancing
            </li>
            <li>
              <input
                type="checkbox"
                id="Singing"
                name="hobbies"
                value="Singing"
                onChange={handleHobbies}
              />
              Singing
            </li>
          </ul>
        </div>
        &nbsp; &nbsp;
        <div>
          <select
            id="status"
            name="status"
            className="form-control"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option defaultChecked value="Filter by status">
              Filter by status
            </option>
            <option id="active" value="Active">
              Active
            </option>
            <option id="inactive" value="Inactive">
              Inactive
            </option>
          </select>
        </div>
        &nbsp;&nbsp;
        <div>
          <button type="reset" className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <table
        className="table table-striped table-bordered"
        style={{ margin: "40px 10px 10px 10px" }}
      >
        <thead className="bg-dark text-light text-center">
          <th>Code</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Photo</th>
          <th>Hobbies</th>
          <th>Added Date</th>
          <th>Status</th>
          <th>action</th>
        </thead>

        {filterUser &&
          filterUser.slice(offset, offset + PER_PAGE).map((items) => {
            return (
              <tbody className="text-center">
                <td>{items.code}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                {items.gender == "M" ? <td>Male</td> : <td>Female</td>}
                <td>{items.country}</td>

                <td>
                  <img
                    src={"./images/" + items.photo}
                    className="rounded float-start"
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </td>
                <td>{items.hobbies}</td>
                <td>{items.dateadded}</td>
                {items.status == "Y" ? (
                  <td>
                    <button
                      type="button"
                      className="btn btn-link"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        handleStatus(items.recid, items.status);
                        getUsers();
                      }}
                    >
                      Active
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      type="button"
                      className="btn btn-link "
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        handleStatus(items.recid, items.status);
                        getUsers();
                      }}
                    >
                      Inactive
                    </button>
                  </td>
                )}
                <td>
                  <div>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => handleView(items.recid)}
                    >
                      <FaUser />
                    </button>
                    <button
                      className="btn btn-success m-1"
                      onClick={() => handleEdit(items.recid)}
                    >
                      <FaUserEdit />
                    </button>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => {
                        handleDelete(items.recid);
                        getUsers();
                      }}
                    >
                      <FaUserMinus />
                    </button>
                  </div>
                </td>
              </tbody>
            );
          })}
      </table>
      <br />
      <br />
      <br />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Home;
