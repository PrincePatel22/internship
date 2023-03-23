import { react, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addemployee = () => {
  const navigation = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const addEmployee = async (event) => {
    event.preventDefault();
    if (firstname == "") {
      alert("first name is required");
    } else if (lastname == "") {
      alert("last name is required");
    } else if (email == "") {
      alert("email is required");
    } else if (phone == "") {
      alert("phone number is required");
    } else if (gender == "") {
      alert("gender is required");
    } else if (address == "") {
      alert("address is required");
    }

    try {
      let response = await axios.post("http://localhost:8000/addemployee", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        gender: gender,
        location: location,
        address: address,
      });
      console.log(response.data);
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form-right">
        <h2 className="text-uppercase">Registration form</h2>
        <div className="col-sm-6 mb-3">
          <label>First Name </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="input-field"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-6 mb-3">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="input-field"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Your Email</label>
          <input
            type="email"
            className="input-field"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Phone Number </label>
          <input
            type="tel"
            className="input-field"
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>Gender</label>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                name="Gender"
                id="male"
                className="input-field"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>Male</label>
              <input
                type="radio"
                name="Gender"
                id="female"
                className="input-field"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>Female</label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <label>Work location </label>
          <select
            className="form-select"
            name="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option value="default">Select location</option>
            <option value="sola">Sola</option>
            <option value="maninagar">Maninagar</option>
            <option value="sahibag">Sahibag</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="input-field"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="form-field">
          <input
            type="submit"
            value="Submit"
            className="register"
            name="Submit"
            onClick={addEmployee}
          />
        </div>
      </form>
    </div>
  );
};

export default Addemployee;
