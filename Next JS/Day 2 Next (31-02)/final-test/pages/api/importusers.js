import exceljs from "exceljs";
import dbConn from "./models/models";

export default async function importUsers(req, res) {
  const data = [];
  const workbook = new exceljs.Workbook();

  await workbook.xlsx.readFile("Users.xlsx");
  const worksheet = workbook.getWorksheet("Users");
  worksheet.eachRow((row, rowCount) => {
    const singleRow = {
      code: row.values[1],
      firstname: row.values[2].trim().split(" ")[0],
      lastname: row.values[2].trim().split(" ")[1],
      email: row.values[3],
      gender: row.values[4],
      hobbies: row.values[5],
      status: row.values[6],
      dateadded: row.values[7],
      dateupdated: row.values[8],
      country: row.values[9],
    };

    data.push(singleRow);
  });

  try {
    dbConn.query(`select recid,code from prince_final;`, (err, result) => {
      if (err) throw err;
      for (let i = 1; i < data.length; i++) {
        let count = 0;
        for (let j = 0; j < result.length; j++) {
          if (data[i].code == result[j].code) {
            count++;
          }
        }
        if (count == 0) {
          dbConn.query(
            `insert into prince_final (code, firstname, lastname, email, gender, hobbies, status, dateadded, dateupdated, delstatus) values ("${data[i].code}","${data[i].firstname}","${data[i].lastname}","${data[i].email}","${data[i].gender}","${data[i].hobbies}","${data[i].status}",concat(curdate()," ",curtime()),concat(curdate()," ",curtime()),"1");`,
            (err, result1) => {
              if (err) throw err;
            }
          );
        } else {
          dbConn.query(
            `update prince_final set firstname="${data[i].firstname}", lastname ="${data[i].lastname}", email = "${data[i].email}",gender = "${data[i].gender}", hobbies ="${data[i].hobbies}",status= "${data[i].status}",country = "${data[i].country}" where code = "${data[i].code}";`,
            (err, result2) => {
              if (err) throw err;
            }
          );
        }
      }
      res.send(200);
    });
  } catch (error) {
    console.log(error);
  }
}
