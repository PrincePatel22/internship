import { react, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Locations = () => {
  const navigation = useNavigate();
  const [locations, setLocations] = useState("");

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
                  <td>{}</td> 
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                  <td>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Edit"
                      onClick={() => {
                        props.setUpdateUser(items);
                        navigation("/Editlocation");
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="X"
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
