import { react, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Locations = (props) => {
  const navigation = useNavigate();
  const [locations, setLocations] = useState("");

  const getLocation = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getlocation");
      let data = response.data;
      setLocations(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteLocation = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/deletelocation",
        { id: id }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <center>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginTop: "0.5%" }}
          onClick={() => navigation("/Addlocation")}
        >
          Add Location
        </button>
      </center>
      <table className="table" style={{ margin: "20px 20px 10px 10px" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Building ID</th>
            <th scope="col">Address</th>
            <th scope="col">Zip code</th>
            <th scope="col">Manager</th>
            <th scope="col" rowSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {locations &&
            locations.map((items) => {
              return (
                <tr>
                  <td>{items.recid}</td>
                  <td>{items.building_id}</td>
                  <td>{items.address}</td>
                  <td>{items.zipcode}</td>
                  <td>{items.manager}</td>
                  <td>
                    <input
                      type="button"
                      className="btn btn-primary"
                      value="Edit"
                      onClick={() => {
                        props.setUpdateLocation(items);
                        navigation("/Editlocation");
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      className="btn btn-danger"
                      value="X"
                      onClick={() => deleteLocation(items.recid)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Locations;
