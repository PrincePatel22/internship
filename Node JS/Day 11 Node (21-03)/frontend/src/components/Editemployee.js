import { react, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Editemployee = (props) => {
  const navigation = useNavigate();
  const [firstname, setFirstname] = useState(props.updateUser.firstname);
  const [lastname, setLastname] = useState(props.updateUser.lastname);
  const [email, setEmail] = useState(props.updateUser.email);
  const [phone, setPhone] = useState(props.updateUser.phone);
  const [gender, setGender] = useState(props.updateUser.gender);
  const [location, setLocation] = useState(props.updateUser.location);
  const [address, setAddress] = useState(props.updateUser.address);

  const updateEmployee = async (event) => {
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
      let response = await axios.post("http://localhost:8000/updateemployee", {
        id: props.updateUser.emp_id,
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
            defaultValue={props.updateUser && props.updateUser.firstname}
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
            defaultValue={props.updateUser && props.updateUser.lastname}
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
            defaultValue={props.updateUser && props.updateUser.email}
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
            defaultValue={props.updateUser && props.updateUser.phone}
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
                defaultChecked={
                  props.updateUser && props.updateUser.gender == "male"
                    ? true
                    : false
                }
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                // defaultValue={props.updateUser && props.updateUser.gender}
              />
              <label>Male</label>
              <input
                type="radio"
                name="Gender"
                id="female"
                className="input-field"
                value="female"
                defaultChecked={
                  props.updateUser && props.updateUser.gender == "female"
                    ? true
                    : false
                }
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                // defaultValue={props.updateUser && props.updateUser.gender}
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
            defaultValue={props.updateUser && props.updateUser.work_location}
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
            defaultValue={props.updateUser && props.updateUser.address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="form-field">
          <input
            type="submit"
            value="Update"
            name="update"
            onClick={updateEmployee}
          />
        </div>
      </form>
    </div>
  );
};

export default Editemployee;
