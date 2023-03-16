import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.post("/primeNumber", (req, res) => {
  let input = req.body.input;
  let temp = [];
  let count = 0;
  for (let x = 2; x <= input; x++) {
    count = 0;
    for (let y = 1; y <= x; y++) {
      if (x % y == 0) {
        count++;
      }
    }
    if (count <= 2) {
      temp.push(x);
    }
  }
  console.log(temp);
  res.send(200, temp);
});

app.post("/findPower", (req, res) => {
  let first = req.body.first;
  let second = req.body.second;
  let result = Math.pow(first, second);
  res.send(200, result);
});

app.listen(8000, () => {
  console.log("listening 8000");
});
