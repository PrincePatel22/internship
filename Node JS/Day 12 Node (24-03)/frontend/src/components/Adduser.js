import { react, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = (event) => {
  const handleAdd = () => {};
  return (
    <div>
      <center>
        <h1>Add User</h1>
      </center>
      <form style={{ margin: "10px 400px" }} onSubmit={handleAdd}>
        <div className="form-group">
          <label htmlFor="code">Code</label>
          <input
            type="text"
            className="form-control"
            id="code"
            name="code"
            // value={code}
            placeholder="Enter Code (Format : USR001,USR002 )"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            // value={firstname}
            placeholder="Enter First Name"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            // value={lastname}
            placeholder="Enter last Name"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            // value={email}
            placeholder="Enter Email Address"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="gender">Gender: </label>&nbsp;
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"

            // checked={gender == "male" ? "true" : null}
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
            // checked={gender == "female" ? "true" : null}
          />
          <label htmlFor="female" className="px-2">
            Female
          </label>
        </div>
        <br></br>
        <div>
          <label htmlFor="hobbies">Hobbies: </label> &nbsp;
          <input
            id="reading"
            type="checkbox"
            name="reading"
            value="reading"
            // onChange={getHobbies}
          />
          &nbsp;
          <label htmlFor="reading">Reading</label> &nbsp;&nbsp;
          <input
            id="gaming"
            type="checkbox"
            name="gaming"
            value="gaming"
            // onChange={getHobbies}
          />
          &nbsp;
          <label htmlFor="gaming">Gaming</label> &nbsp;&nbsp;
          <input
            id="coding"
            type="checkbox"
            name="coding"
            value="coding"
            // onChange={getHobbies}
          />
          &nbsp;
          <label htmlFor="coding">Coding</label> &nbsp;&nbsp;
          <input
            id="drawing"
            type="checkbox"
            name="drawing"
            value="drawing"
            // onChange={getHobbies}
          />
          &nbsp;
          <label htmlFor="drawing">Drawing</label> &nbsp;
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="photo">Select Image :</label>
          <input
            className="form-control"
            type="file"
            name="file"
            /*onChange={saveFile}*/ accept="image/*"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            className="form-select form-select-sm"
            type="text"
            name="country"
            // value={country}
          >
            <option name="country" value="select">
              --select--
            </option>
            <option name="country" value="india">
              India
            </option>
            <option name="country" value="usa">
              USA
            </option>
            <option name="country" value="uk">
              UK
            </option>
            <option name="country" value="brazil">
              Brazil
            </option>
            <option name="country" value="canada">
              Canada
            </option>
          </select>
        </div>
        <br></br>
        <input type="submit" className="btn btn-primary" value="Submit" />{" "}
        &nbsp;
        <button
          className="btn btn-danger"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Adduser;
