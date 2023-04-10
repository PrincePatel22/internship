import { react, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Editlocation = (props) => {
  const navigation = useNavigate();

  const [buildingid, setBuildingid] = useState(
    props.updateLocation && props.updateLocation.building_id
  );
  const [address, setAddress] = useState(
    props.updateLocation && props.updateLocation.address
  );
  const [zipcode, setZipcode] = useState(
    props.updateLocation && props.updateLocation.zipcode
  );
  const [manager, setManager] = useState(
    props.updateLocation && props.updateLocation.manager
  );

  const editLocation = async (event) => {
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
      let response = await axios.post("http://localhost:8000/updatelocation", {
        recid: props.updateLocation.recid,
        building_id: buildingid,
        address: address,
        zipcode: zipcode,
        manager: manager,
      });
      navigation("/Locations");
    } catch (error) {
      console.log(error);
    }}
  };

  return (
    <form className="form-right" onSubmit={editLocation}>
      <h2 className="text-uppercase">Edit location</h2>
      <div className="col-sm-6 mb-3">
        <label>Building ID </label>
        <input
          type="text"
          name="buildingid"
          id="buildingid"
          defaultValue={
            props.updateLocation && props.updateLocation.building_id
          }
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
          defaultValue={props.updateLocation && props.updateLocation.address}
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
          defaultValue={props.updateLocation && props.updateLocation.zipcode}
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
          defaultValue={props.updateLocation && props.updateLocation.manager}
          onChange={(e) => {
            setManager(e.target.value);
          }}
        />
      </div>
      <div className="form-field">
        <input
          type="submit"
          value="update"
          name="Submit"
          className="btn btn-primary"
        />
      </div>
    </form>
  );
};

export default Editlocation;
