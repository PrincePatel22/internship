import dbConn from "../Models/models.js";

export const addemployee = async (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let phone = req.body.phone;
  let gender = req.body.gender;
  let location = req.body.location;
  let address = req.body.address;

  try {
    dbConn.query(
      `INSERT INTO prince_emp (firstname, lastname, phone, address, gender, work_location, email,delstatus) VALUES ("${firstname}","${lastname}","${phone}","${address}","${gender}","${location}","${email}","1")`,
      (err, result) => {
        if (err) throw err;
        res.send("Data Added successfully.");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getemployee = async (req, res) => {
  try {
    dbConn.query(
      `SELECT * FROM prince_emp WHERE delstatus="1"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteemployee = async (req, res) => {
  try {
    dbConn.query(
      `UPDATE prince_emp SET delstatus="0" WHERE emp_id="${req.body.id}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateemployee = async (req, res) => {
  console.log(req.body);
  let id = req.body.id;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let phone = req.body.phone;
  let gender = req.body.gender;
  let location = req.body.location;
  let address = req.body.address;
  try {
    dbConn.query(
      `UPDATE prince_emp SET firstname="${firstname}",lastname="${lastname}",phone="${phone}",address="${address}",gender="${gender}",work_location="${location}",email="${email}" WHERE emp_id="${id}"`,
      (err, result) => {
        if (err) throw err;
        res.send("Data updated");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
