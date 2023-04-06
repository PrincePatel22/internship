import Link from "next/link";
import { useState } from "react";
import { VscChevronLeft } from "react-icons/vsc";
import axios from "axios";
import { useRouter } from "next/router";

export default function AddUser() {
  const [code, setCode] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [country, setCountry] = useState();
  const [hobbies, setHobbies] = useState([]);
  const router = useRouter();

  const getHobbies = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((e) => e !== value));
    }
  };

  const getFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleAdd = async (event) => {
    event.preventDefault();

    const users = await axios.get("/api/getusers");

    if (!code.match(/^[0-9A-Za-z]+$/) || code == "") {
      return alert("Please enter code");
    } else if (!code.match(/[A-Za-z]{3}[0-9]{3}/)) {
      return alert("Please enter 6 digits code only");
    } else if (users.data.find((item) => item.code == code)) {
      return alert("code is already exits.Please enter another code");
    } else if (!firstname.match(/^[A-Za-z]+$/) || firstname == "") {
      return alert("Please enter first name");
    } else if (!lastname.match(/^[A-Za-z]+$/) || lastname == "") {
      return alert("Please enter last name");
    } else if (email == "") {
      return alert("Please enter Your email");
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return alert("Please enter valid email");
    } else if (gender == "") {
      return alert("Please select Gender");
    } else if (country == "Select Country") {
      return alert("Please select your Country");
    } else {
      try {
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData);
        formData.append("fileName", fileName);

        const responce = await axios.post("/api/addimage", formData);

        const res = await axios.post("/api/adduser", {
          code: code,
          firstname: firstname,
          lastname: lastname,
          email: email,
          gender: gender,
          filename: fileName,
          country: country,
          hobbies: hobbies,
        });
        router.push("/");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <Link href="/">
        <button
          type="button"
          className="btn btn-dark"
          style={{ margin: "20px 0 0 20px" }}
        >
          <VscChevronLeft size={25} />
        </button>
      </Link>
      <center>
        <h1>Add User</h1>
      </center>
      <form method="post" onSubmit={handleAdd}>
        <div className="form-group col-md-4">
          <label htmlFor="code">code</label>
          <input
            type="text"
            className="form-control"
            id="code"
            name="code"
            placeholder="Enter your code (USR001, USR002)"
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4 m-1 ">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            placeholder="Enter First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4 m-1 ">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            placeholder="Enter Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4 m-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4 m-1">
          <label htmlFor="Gender">Gender</label>
          <div className="form-control">
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
          </div>
        </div>

        <div className="form-group col-md-4 m-1">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            className="form-control"
            onChange={(e) => setCountry(e.target.value)}
          >
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
          <label htmlFor="img"> Upload Your Photo</label>
          <input
            type="file"
            className="form-control"
            id="img"
            name="img"
            onChange={getFile}
          />
        </div>

        <div className="form-group col-md-8">
          <label htmlFor="hobbies">Hobbies</label>
          <div className="form-control">
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Reading"
              value="Reading"
              onChange={getHobbies}
              // onChange={(e) => setHobbies(e.target.value)}
            />
            Reading
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Travelling"
              value="Travelling"
              onChange={getHobbies}
              // onChange={(e) => setHobbies(e.target.value)}
            />
            Travelling
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Football"
              value="Football"
              onChange={getHobbies}
              // onChange={(e) => setHobbies(e.target.value)}
            />
            Football
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Cricket"
              value="Cricket"
              onChange={getHobbies}
              // onChange={(e) => setHobbies(e.target.value)}
            />
            Cricket
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Dancing"
              value="Dancing"
              onChange={getHobbies}
              // onChange={(e) => setHobbies(e.target.value)}
            />
            Dancing
            <input
              type="checkbox"
              className="m-2"
              name="hobbies"
              id="Singing"
              value="Singing"
              onChange={getHobbies}
              // onChange={(e) => setHobbies(e.target.value)}
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
}
