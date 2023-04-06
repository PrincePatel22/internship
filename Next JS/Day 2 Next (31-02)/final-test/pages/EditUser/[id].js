import Link from "next/link";
import { useState, useEffect } from "react";
import { VscChevronLeft } from "react-icons/vsc";
import axios from "axios";
import { useRouter } from "next/router";

export default function EditUser() {
  const [user, setUser] = useState("");
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
    }
    if (!checked) {
      setHobbies(hobbies.filter((e) => e !== value));
    }
  };

  const getFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const getUser = async () => {
    console.log(router.query.id);
    try {
      const res = await axios.post("/api/getuser", {
        id: router.query.id,
      });
      console.log(res.data[0]);
      setUser(res.data[0]);
      setCode(res.data[0].code);
      setFirstname(res.data[0].firstname);
      setLastname(res.data[0].lastname);
      setEmail(res.data[0].email);
      setGender(res.data[0].gender);
      setCountry(res.data[0].country);
      setFileName(res.data[0].photo);
      setHobbies(res.data[0].hobbies.split(","));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (event) => {
    event.preventDefault();

    if (!firstname.match(/^[A-Za-z]+$/) || firstname == "") {
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

        formData.append("fileName", fileName);

        const responce = await axios.post("/api/addimage", formData);
        console.log(hobbies);
        const res = await axios.post("/api/edituser/", {
          id: router.query.id,
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
        className="btn btn-dark"
        style={{ margin: "20px 0 0 20px" }}
        onClick={() => {
          router.push("/");
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
              src={"../images/" + user.photo}
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
                onChange={(e) => setCode(e.target.value)}
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
                onChange={(e) => setFirstname(e.target.value)}
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
                onChange={(e) => setLastname(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setGender(e.target.value)}
                  defaultChecked={user.gender === "M"}
                />
                Male
                <input
                  type="radio"
                  id="female"
                  className="m-1"
                  name="gender"
                  value="F"
                  onChange={(e) => setGender(e.target.value)}
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
                onChange={(e) => setCountry(e.target.value)}
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
              <input
                type="file"
                className="form-control"
                id="img"
                name="img"
                onChange={getFile}
              />
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
                  onChange={getHobbies}
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
                  onChange={getHobbies}
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
                  onChange={getHobbies}
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
                  onChange={getHobbies}
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
                  onChange={getHobbies}
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
                  onChange={getHobbies}
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
}
