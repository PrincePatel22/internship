import { react, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addhr = () => {
  const navigation = useNavigate();
  const [payroll, setPayroll] = useState("");
  const [securityno, setSecurityno] = useState("");
  const [salary, setSalary] = useState("");
  const [employee, setEmployee] = useState("");
  const [emp, setEmp] = useState();

  const getemployeeid = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getemployeeid");
      setEmployee(response.data);
      setEmp(response.data[0].emp_id);
    } catch (error) {
      console.log(error);
    }
  };

  const addHr = async (event) => {
    event.preventDefault();

    try {
      console.log(emp);
      let response = await axios.post("http://localhost:8000/addhr", {
        emp_id: emp,
        payroll: payroll,
        securityno: securityno,
        salary: salary,
      });
      console.log(response.data);
      navigation("/Hr");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getemployeeid();
  }, []);

  return (
    <form className="form-right">
      <h2 className="text-uppercase">Add Record</h2>
      <select
        className="form-select"
        style={{ width: "100px" }}
        name="empid"
        onChange={(e) => {
          setEmp(e.target.value);
        }}
      >
        {employee &&
          employee.map((items) => {
            return <option value={items.emp_id}>{items.emp_id}</option>;
          })}
      </select>
      <div className="col-sm-6 mb-3">
        <label>payroll</label>
        <input
          type="text"
          name="payroll"
          id="payroll"
          className="input-field"
          onChange={(e) => {
            setPayroll(e.target.value);
          }}
        />
      </div>
      <div className="col-sm-6 mb-3">
        <label>Sucurity No</label>
        <input
          type="text"
          name="security_no"
          id="security_no"
          className="input-field"
          onChange={(e) => {
            setSecurityno(e.target.value);
          }}
        />
      </div>{" "}
      <div className="col-sm-6 mb-3">
        <label>Salary</label>
        <input
          type="text"
          name="salary"
          id="salary"
          className="input-field"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
      </div>{" "}
      <div className="form-field">
        <input
          type="submit"
          value="Submit"
          className="register"
          name="Submit"
          onClick={addHr}
        />
      </div>
    </form>
  );
};

export default Addhr;
