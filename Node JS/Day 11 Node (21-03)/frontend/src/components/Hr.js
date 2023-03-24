import { react, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Hr = (props) => {
  const navigation = useNavigate();
  const [hr, setHr] = useState("");
 const getHr = async () => {
   try {
     const response = await axios.get("http://localhost:8000/gethr");
     let data = response.data;
     setHr(data);
   } catch (error) {
     console.log(error);
   }
 };

 const deleteHr = async (id) => {
   try {
     const response = await axios.post("http://localhost:8000/deletehr", {
       id: id,
     });
   } catch (error) {
     console.log(error);
   }
 };
 
 useEffect(() => {
   getHr();
 }, []);

  return (
    <div>
      <center>
        <button
          className="btn btn-primary"
          type="button"
          style={{ marginTop: "0.5%" }}
          onClick={() => navigation("/Addhr")}
        >
          Add record
        </button>
      </center>
      <table className="table" style={{ margin: "20px 20px 10px 10px" }}>
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Payroll</th>
            <th scope="col">Security Number</th>
            <th scope="col">Salary</th>
            <th scope="col" rowSpan={2} style={{textAlign:"center"}}>
              Action
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {hr &&
            hr.map((items) => {
              return (
                <tr>
                  <td>{items.emp_id}</td>
                  <td>{items.payroll}</td>
                  <td>{items.security_no}</td>
                  <td>{items.salary}</td>
                  <td>
                    <input
                      type="button"
                      className="btn btn-primary"
                      value="Edit"
                      onClick={() => {
                        props.setUpdatehr(items);
                        console.log(props.setUpdatehr);
                        navigation("/Edithr");
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      className="btn btn-danger"
                      value="X"
                      onClick={() => deleteHr(items.recid)}
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

export default Hr;
