import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
app.use(express.json());
app.use(cors());

const dbConnect = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
});

dbConnect.connect((error) => {
  if (error) throw error;
  console.log("Database Connected!");
});

app.post("/create",(req,res) => {
    let query = "create table product_node (recid int,productid int,code varchar(255),price int)";
    dbConnect.query(query,(error) => {
        if (error) throw error;
        console.log("table created sucessfully");
    })
})

app.post("/add",(req,res) => {
    let recid = req.body.recid;
    let productid = req.body.productid;
    let code = req.body.code;
    let price = req.body.price;
    let query = `INSERT INTO product_node (recid,productid,code,price) VALUES ("${recid}","${productid}","${code}","${price}")`;
    dbConnect.query(query,(error) => {
        if (error) throw error;
        return res.send("Data Added successfully.");
    })
});

app.get


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000.");
});