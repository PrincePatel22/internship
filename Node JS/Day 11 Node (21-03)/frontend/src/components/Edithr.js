import React from 'react'

const Edithr = (props) => {
    const [payroll, setPayroll] = useState(props.u);
    const [securityno, setSecurityno] = useState("");
    const [salary, setSalary] = useState("");
  return (
    <form className="form-right">
      <h2 className="text-uppercase">Edit Record</h2>
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
}

export default Edithr;