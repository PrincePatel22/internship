import { react, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Editemployee = (props) => {
  const navigation = useNavigate();
  const [firstname, setFirstname] = useState(
    props.updateUser && props.updateUser.firstname
  );
  const [lastname, setLastname] = useState(
    props.updateUser && props.updateUser.lastname
  );
  const [email, setEmail] = useState(
    props.updateUser && props.updateUser.email
  );
  const [phone, setPhone] = useState(
    props.updateUser && props.updateUser.phone
  );
  const [gender, setGender] = useState(
    props.updateUser && props.updateUser.gender
  );
  const [location, setLocation] = useState([]);
  const [loc, setLoc] = useState(props.updateUser && props.updateUser.location);
  const [address, setAddress] = useState(
    props.updateUser && props.updateUser.address
  );

  const updateEmployee = async (event) => {
    event.preventDefault();
    if (firstname == "") {
      alert("first name is required");
    } else if (!/^[A-Za-z]*$/.test(firstname)) {
      alert("Enter valid first name");
    } else if (lastname == "") {
      alert("last name is required");
    } else if (!/^[A-Za-z]*$/.test(lastname)) {
      alert("Enter valid last name");
    } else if (email == "") {
      alert("email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Enter valid email");
    } else if (phone == "") {
      alert("phone number is required");
    } else if (phone.length < 10) {
      alert("Enter valid Phone number");
    } else if (gender == "") {
      alert("gender is required");
    } else if (address == "") {
      alert("address is required");
    } else {
      try {
        let response = await axios.post(
          "http://localhost:8000/updateemployee",
          {
            id: props.updateUser.emp_id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            gender: gender,
            location: loc,
            address: address,
          }
        );
        console.log(response.data);
        navigation("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getaddress = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getaddress");
      setLocation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getaddress();
  }, []);
  return (
    <div>
      <form className="form-right">
        <h2 className="text-uppercase">Edit Employee</h2>
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
              setLoc(e.target.value);
            }}
          >
            {location &&
              location.map((items) => {
                return <option value={items.address}>{items.address}</option>;
              })}
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
            className="btn btn-primary"
            onClick={updateEmployee}
          />
        </div>
      </form>
    </div>
  );
};

export default Editemployee;
