import { react, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addlocation = () => {
  const navigation = useNavigate();
  const [buildingid, setBuildingid] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [manager, setManager] = useState("");

  const addLocation = async (event) => {
    event.preventDefault();
    if (buildingid == "") {
      alert("Building ID is required");
    } else if (address == "") {
      alert("Address is required");
    } else if (zipcode == "") {
      alert("zipcode is required");
    } else if (manager == "") {
      alert("Manager is required");
    } else {
      try {
        let response = await axios.post("http://localhost:8000/addlocation", {
          buildingid: buildingid,
          address: address,
          zipcode: zipcode,
          manager: manager,
        });
        console.log(response.data);
        navigation("/Locations");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="form-right">
      <h2 className="text-uppercase">Add locations</h2>
      <div className="col-sm-6 mb-3">
        <label>Building ID </label>
        <input
          type="text"
          name="buildingid"
          id="buildingid"
          onChange={(e) => {
            setBuildingid(e.target.value);
          }}
        />
      </div>
      <div className="col-sm-6 mb-3">
        <label>Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <div className="col-sm-6 mb-3">
        <label>Zip code</label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          onChange={(e) => {
            setZipcode(e.target.value);
          }}
        />
      </div>
      <div className="col-sm-6 mb-3">
        <label>Manager</label>
        <input
          type="text"
          name="manager"
          id="manager"
          onChange={(e) => {
            setManager(e.target.value);
          }}
        />
      </div>
      <div className="form-field">
        <input
          type="submit"
          value="Submit"
          name="Submit"
          onClick={addLocation}
        />
      </div>
    </form>
  );
};

export default Addlocation;
