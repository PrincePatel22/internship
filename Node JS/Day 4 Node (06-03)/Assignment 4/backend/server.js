import express from "express";
import cors from "cors";
import employee from "./employee.json" assert { type: "json" };
import projects from "./projects.json" assert { type: "json" };

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.get("/employee/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let searchEmployee = employee.filter((data) => data.id == id);
  if (searchEmployee) {
    res.json(searchEmployee);
  } else {
    res.send(404, "Employee not found");
  }
});

app.get("/projects/:id", (req, res) => {
  let id = req.params.id;
  let searchProject = projects.filter((data) => data.projectid == id);
  if (searchProject) {
    res.json(searchProject);
  } else {
    res.send(404, "Project not found");
  }
});

app.get("/getemployeedetails", (req, res) => {
  let employeeDetails = employee.map((emp) => {
    let project = projects.filter((pro) => {
      return pro.projectid == emp.projectid;
    });
    return { ...emp, project };
  });
  res.json(employeeDetails);
});

app.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  let newEmployee = employee.filter((data) => {
    return data.id != id;
  });
  res.json(newEmployee);
});

app.put("/update/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let emp = employee.find((data) => data.id === id);
  emp.name = req.body.name;
  emp.department = req.body.department;
  emp.gender = req.body.gender;
  emp.projectid = req.body.projectid;
  res.send(200, "User updated");
});

app.listen(8000, () => {
  console.log("listening 8000");
});
