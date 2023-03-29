import { react, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edithr = (props) => {
  const navigation = useNavigate();
  const [payroll, setPayroll] = useState(
    props.updatehr && props.updatehr.payroll
  );
  const [securityno, setSecurityno] = useState(
    props.updatehr && props.updatehr.securityno
  );
  const [salary, setSalary] = useState(props.updatehr && props.updatehr.salary);
  const [emp, setEmp] = useState(props.updatehr && props.updatehr.emp_id);
  const [employee, setEmployee] = useState([]);

  const getemployeeid = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getemployeeid");
      setEmployee(response.data);
      setEmp(response.data[0].emp_id);
    } catch (error) {
      console.log(error);
    }
  };
  const updatehr = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/updatehr", {
        recid: props.updatehr.recid,
        emp_id: props.updatehr.emp_id,
        payroll: payroll,
        security_no: securityno,
        salary: salary,
      });
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
      <h2 className="text-uppercase">Edit Record</h2>
      <select
        className="form-select"
        style={{ width: "100px" }}
        name="empid"
        value={props.updatehr && props.updatehr.emp_id}
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
          defaultValue={props.updatehr && props.updatehr.payroll}
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
          defaultValue={props.updatehr && props.updatehr.security_no}
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
          defaultValue={props.updatehr && props.updatehr.salary}
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
          onClick={updatehr}
        />
      </div>
    </form>
  );
};

export default Edithr;
