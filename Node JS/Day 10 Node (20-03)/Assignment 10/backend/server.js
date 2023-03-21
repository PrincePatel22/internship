import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
app.use(express.json());
app.use(cors());

const dbConn = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "traineedb",
  timezone: "utc",
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

app.get("/getparent", (req, res) => {
  const query = `select * from prince_category`;
  dbConn.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get("/parentdata", (req, res) => {
  const query = `select * from prince_category where parent=0`;
  dbConn.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get("/getdata", (req, res) => {
  const id = req.query.id;
  console.log(req.query);
  try {
    const query = `select * from prince_category where parent="${id}"`;
    dbConn.query(query, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/delete", async (req, res) => {
  console.log(req.query);
  try {
    const ans = await deleteData(req.query);
    res.status(200).send("your data deleted");
  } catch (err) {
    res.status(400).send(err);
  }
});

const deleteData = (data) => {
  console.log(data);
  // data =  { name: 'TV', id: '2' }
  return new Promise(async (resolve, reject) => {
    try {
      const getMyChild = await getChildData(data.id);
    //   console.log("getMyChild", getMyChild);
      getMyChild.map(async (item) => {
        await deleteData(item);
      });
      const ans = await deleteSingleData(data.id);
      resolve("ok");
    } catch (err) {
      reject(err);
    }
  });
};

const getChildData = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = `select * from prince_category where parent="${id}"`;
      const ans = await sqlQueryRunner(query);
      resolve(ans);
    } catch (err) {
      reject(err);
    }
  });
};

const deleteSingleData = (id) => {
  return new Promise(async (resolve, reject) => {
    const sqlQuery = `delete from prince_category where id="${id}"`;
    try {
      const ans = await sqlQueryRunner(sqlQuery);
      resolve(ans);
    } catch (err) {
      reject(err);
    }
  });
};

const sqlQueryRunner = (query) => {
  return new Promise((resolve, reject) => {
    dbConn.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

app.post("/addcategory", (req, res) => {
  console.log(req.body);
  const query = `Insert into prince_category (name,parent) values ("${req.body.name}","${req.body.category}")`;
  dbConn.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 9001.`);
});
