import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import dbConn from "./models/models.js";

const app = express();

app.use(express.json({ extended: true }));
app.use(cors());
app.use("/", routes);

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
