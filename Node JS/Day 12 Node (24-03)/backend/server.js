import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import dbConn from "./models/models.js";
import { join } from "path";
import { getCurrentDir } from "./static/static-paths.js";
const app = express();

app.use(express.json({ extended: true }));
app.use(cors());
app.use("/", routes);
app.use(express.static(join(getCurrentDir(), "client/public")));

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
