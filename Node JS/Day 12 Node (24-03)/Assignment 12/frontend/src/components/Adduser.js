import axios from "axios";
import { VscChevronLeft } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const navigation = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();

    const users = await axios.get("http://localhost:8000/getusers");
    console.log(users.data);

    const data = new FormData(event.target);
    if (
      !event.target.code.value.match(/^[0-9A-Za-z]+$/) ||
      event.target.code.value == ""
    ) {
      return alert("Please enter code");
    } else if (!event.target.code.value.match(/[A-Za-z]{3}[0-9]{3}/)) {
      return alert("Please enter 6 digits code only");
    } else if (
      users.data.find((item) => item.code == event.target.code.value)
    ) {
      return alert("code is already exits.Please enter another code");
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
        const res = await axios.post("http://localhost:8000/adduser", data);
        navigation("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div style={{ marginLeft: "10px" }}>
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
      <center>
        <h1>Add User</h1>
      </center>
      <form onSubmit={handleAdd} method="post">
        <div className="form-group col-md-4">
          <label for="code">code</label>
          <input
            type="text"
            className="form-control"
            id="code"
            name="code"
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
            />
            Male
            <input
              type="radio"
              id="female"
              className="m-1"
              name="gender"
              value="F"
            />
            Female
          </div>
        </div>

        <div className="form-group col-md-4 m-1">
          <label for="country">Country</label>
          <select id="country" name="country" className="form-control">
            <option defaultChecked>Select Country</option>
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
            />
            Reading
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Travelling"
              value="Travelling"
            />
            Travelling
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Football"
              value="Football"
            />
            Football
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Cricket"
              value="Cricket"
            />
            Cricket
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Dancing"
              value="Dancing"
            />
            Dancing
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Singing"
              value="Singing"
            />
            Singing
          </div>
        </div>

        <button type="submit" className="btn btn-primary m-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
