import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.post("/createFolder", (req, res) => {
  let folderName = req.body.name;
  try {
    fs.mkdir("./" + folderName, () => {
      res.send(200, "folder is created sucessfully");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/createFile", (req, res) => {
  let fileName = req.body.name;
  try {
    fs.appendFile("./" + fileName, "", (error) => {
      if (error) throw error;
      res.send(200, "file is created sucessfully");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/writeData", (req, res) => {
  let fileName = req.body.filName;
  let data = req.body.content;
  try {
    fs.writeFile("./" + fileName, data, (error) => {
      if (error) throw error;
      res.send(200, "Data is added sucessfully");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/appendData", (req, res) => {
  let fileName = req.body.filName;
  let data = req.body.content;
  try {
    fs.appendFile("./" + fileName, data, (error) => {
      if (error) throw error;
      res.send(200, "Data is appdended sucessfully");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/readData", (req, res) => {
  let fileName = req.body.filName;
  try {
    fs.readFile("./" + fileName, (error, data) => {
      res.send(200, data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteFile", (req, res) => {
  let fileName = req.body.filName;
  try {
    fs.unlink("./" + fileName, (error) => {
      res.send(200, "File is deleted sucessfully");
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/displayFile", (req, res) => {
  let fileName = req.body.filName;
  try {
    fs.readFile("./" + fileName, (error, data) => {
      res.send(200, data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log("listening 8000");
});
