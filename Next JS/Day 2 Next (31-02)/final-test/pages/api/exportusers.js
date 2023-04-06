import exceljs from "exceljs";
import dbConn from "./models/models";

export default async function exportUsers(req, res) {
  const users = req.body.users;

  const workbook = new exceljs.Workbook();
  const worksheet = workbook.addWorksheet("Users");

  worksheet.columns = [
    { header: "Code", key: "code", width: 10 },
    { header: "Name", key: "name", width: 25 },
    { header: "Email", key: "email", width: 25 },
    { header: "Gender", key: "gender", width: 10 },
    { header: "Hobbies", key: "hobbies", width: 50 },
    { header: "Status", key: "status", width: 10 },
    { header: "Created At", key: "dateadded", width: 25 },
    { header: "Updated At", key: "dateupdated", width: 25 },
    { header: "Country", key: "country", width: 25 },
  ];

  users.map((i) => worksheet.addRow(i));
  workbook.xlsx.writeFile("Users.xlsx");
  res.send(200);
}
