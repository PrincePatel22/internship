import React, { useState, useEffect } from "react";

function Add({ employees, setEmployees, setIsAdding }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("none");
  const [about, setAbouts] = useState("");

  // useEffect(() => {}, []);

  const handleAdd = (e) => {
    let skills = "";
    for (const x of form.skills) {
      if (x.checked == true) {
        skills += x.value + ", ";
      }
    }

    // Validation for Add
    if (!firstname.match(/^[A-Za-z]+$/) || firstname == "") {
      return alert("Please enter first name");
    } else if (!lastname.match(/^[A-Za-z]+$/) || lastname == "") {
      return alert("Please enter last name");
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return alert("Please enter valid email");
    } else if (isNaN(phone) || phone === "") {
      return alert("Please enter valid Phone Number");
    } else if (!gender) {
      return alert("Please select Gender");
    } else if (department == "none" || department == "") {
      return alert("Please select your Department");
    } else if (skills.length == 0) {
      return alert("Please select skills");
    } else if (!about) {
      return alert("Please enter About");
    }

    const id = employees.length + 1;

    const newEmployee = {
      id,
      firstname,
      lastname,
      email,
      phone,
      gender,
      department,
      skills,
      about,
    };

    const tempemployee = employees;
    tempemployee.push(newEmployee);
    console.log(tempemployee);
    setEmployees(tempemployee);
    setIsAdding(false);
  };

  return (
    <div style={{ marginRight: "10px", marginLeft: "5px" }}>
      <form name="form" onSubmit={handleAdd}>
        <h3>Add Employee</h3>
        <br></br>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="firstname">First Name: </label>
            <input
              className="form-control"
              id="firstname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="lastname">Last Name: </label>
            <input
              className="form-control"
              id="lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <br></br>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              className="form-control"
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>
        <br></br>
        <div>
          <label htmlFor="gender">Gender: </label>&nbsp;
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label htmlFor="male" className="px-2">
            Male
          </label>
          &nbsp;
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className="px-2">
            Female
          </label>
        </div>
        <br></br>
        <div>
          {" "}
          <label htmlFor="department">Department: </label>
          <select
            id="department"
            class="form-select"
            type="text"
            name="department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            <option value="none">Select Your Department</option>
            <option value="PHP">PHP</option>
            <option value=".NET">.Net</option>
            <option value="SEO">SEO</option>
            <option value="Mobile">Mobile</option>
            <option value="Admin/HR">Admin/HR</option>
            <option value="Account">Account</option>
          </select>
        </div>
        <br></br>
        <div>
          <label htmlFor="skills">Skills: </label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="skills"
            value="Programming"
          />
          <label htmlFor="Programming">Programming</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="skills"
            value="Communication"
          />
          <label htmlFor="Communication">Communication</label> &nbsp;
          <input id="skills" type="checkbox" name="skills" value="Finance" />
          <label htmlFor="Finance">Finance</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="skills"
            value="Recruitment"
          />
          <label htmlFor="Recruitment">Recruitment</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="skills"
            value="Optimization"
          />
          <label htmlFor="Optimization">Optimization</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="skills"
            value="App Development"
          />
          <label htmlFor="App Development">App Development</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="skills"
            value="Frontend Technology"
          />
          <label htmlFor="Frontend Technology">Frontend Technology</label>
          &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="skills"
            value="Backend Technology"
          />
          <label htmlFor="Backend Technology">Backend Technology</label>
        </div>
        <br></br>
        <div className="col-12">
          <label className="form-label" htmlFor="about">
            About:{" "}
          </label>
          <input
            id="about"
            className="form-control"
            type="text"
            name="about"
            value={about}
            onChange={(e) => {
              setAbouts(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <input
            type="button"
            className="btn btn-dark"
            style={{ marginRight: "5px" }}
            value="Add"
            onClick={() => handleAdd()}
          />
          <input
            className="btn btn-dark"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
