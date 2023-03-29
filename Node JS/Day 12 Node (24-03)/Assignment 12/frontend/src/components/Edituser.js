import { react, useEffect, useState } from "react";
import axios from "axios";
import { VscChevronLeft } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Edituser = () => {
  const [user, setUser] = useState("");
  const navigation = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.post("http://localhost:8000/getuser", {
        id: localStorage.getItem("ID"),
      });
      setUser(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (
      !event.target.code.value.match(/^[0-9A-Za-z]+$/) ||
      event.target.code.value == ""
    ) {
      return alert("Please enter code");
    } else if (
      !event.target.firstname.value.match(/^[A-Za-z]+$/) ||
      event.target.firstname.value == ""
    ) {
      return alert("Please enter first name");
    } else if (
      !event.target.lastname.value.match(/^[A-Za-z]+$/) ||
      event.target.lastname.value == ""
    ) {
      return alert("Please enter last name");
    } else if (event.target.email.value == "") {
      return alert("Please enter Your email");
    } else if (
      !event.target.email.value.match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      )
    ) {
      return alert("Please enter valid email");
    } else if (event.target.gender.value == "") {
      return alert("Please select Gender");
    } else if (event.target.country.value == "Select Country") {
      return alert("Please select your Country");
    } else {
      try {
        const res = await axios.put(
          "http://localhost:8000/edituser/" + localStorage.getItem("ID"),
          data
        );
        navigation("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <button
        type="button"
        class="btn btn-dark"
        style={{ margin: "20px 0 0 20px" }}
        onClick={() => {
          navigation("/");
        }}
      >
        <VscChevronLeft size={25} />
      </button>
      {user && (
        <div style={{ marginLeft: "10px" }}>
          <center>
            <h1>Edit User</h1>
          </center>
          <div className="text-center">
            <img
              className="rounded mx-auto d-block"
              src={"./images/" + user.photo}
              style={{
                height: "150px",
                width: "150px",
                border: "1px solid black",
              }}
            />
          </div>
          <form onSubmit={handleEdit}>
            <div className="form-group col-md-4">
              <label for="code">code</label>
              <input
                type="text"
                className="form-control"
                id="code"
                name="code"
                defaultValue={user.code}
                readOnly
                disabled
                placeholder="Enter your code (USR001, USR002)"
              />
            </div>

            <div className="form-group col-md-4 m-1 ">
              <label for="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                defaultValue={user.firstname}
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group col-md-4 m-1 ">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                defaultValue={user.lastname}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="form-group col-md-4 m-1">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                defaultValue={user.email}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="form-group col-md-4 m-1">
              <label for="Gender">Gender</label>
              <div className="form-control">
                <input
                  type="radio"
                  id="male"
                  className="m-1"
                  name="gender"
                  value="M"
                  defaultChecked={user.gender === "M"}
                />
                Male
                <input
                  type="radio"
                  id="female"
                  className="m-1"
                  name="gender"
                  value="F"
                  defaultChecked={user.gender === "F"}
                />
                Female
              </div>
            </div>

            <div className="form-group col-md-4 m-1">
              <label for="country">Country</label>
              <select
                id="country"
                name="country"
                className="form-control"
                defaultValue={user.country}
              >
                <option>Select Country</option>
                <option name="country" value="India">
                  India
                </option>
                <option name="country" value="USA">
                  USA
                </option>
                <option name="country" value="Australia">
                  Australia
                </option>
                <option name="country" value="UK">
                  UK
                </option>
                <option name="country" value="Canada">
                  Canada
                </option>
              </select>
            </div>
            <div className="form-group col-md-4 m-1">
              <label for="img"> Upload Your Photo</label>
              <input type="file" className="form-control" id="img" name="img" />
            </div>

            <div className="form-group col-md-8">
              <label for="hobbies">Hobbies</label>
              <div className="form-control">
                <input
                  type="checkbox"
                  className="m-2"
                  name="hobbies"
                  id="Reading"
                  value="Reading"
                  defaultChecked={
                    user.hobbies && user.hobbies.includes("Reading")
                  }
                />
                Reading
                <input
                  type="checkbox"
                  className="m-2"
                  name="hobbies"
                  id="Travelling"
                  value="Travelling"
                  defaultChecked={
                    user.hobbies && user.hobbies.includes("Travelling")
                  }
                />
                Travelling
                <input
                  type="checkbox"
                  className="m-2"
                  name="hobbies"
                  id="Football"
                  value="Football"
                  defaultChecked={
                    user.hobbies && user.hobbies.includes("Football")
                  }
                />
                Football
                <input
                  type="checkbox"
                  className="m-2"
                  name="hobbies"
                  id="Cricket"
                  value="Cricket"
                  defaultChecked={
                    user.hobbies && user.hobbies.includes("Cricket")
                  }
                />
                Cricket
                <input
                  type="checkbox"
                  className="m-2"
                  name="hobbies"
                  id="Dancing"
                  value="Dancing"
                  defaultChecked={
                    user.hobbies && user.hobbies.includes("Dancing")
                  }
                />
                Dancing
                <input
                  type="checkbox"
                  className="m-2"
                  name="hobbies"
                  id="Singing"
                  value="Singing"
                  defaultChecked={
                    user.hobbies && user.hobbies.includes("Singing")
                  }
                />
                Singing
              </div>
            </div>

            <button type="submit" className="btn btn-primary m-4">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Edituser;
