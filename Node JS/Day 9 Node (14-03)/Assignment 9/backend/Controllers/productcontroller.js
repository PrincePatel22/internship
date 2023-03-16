import dbConn from "../Models/models.js";
import jwt from "jsonwebtoken";
let secretKey = "secretkey";

export const getproducts = async (req, res) => {
  let query = `select * from prince_products`;
  try {
    dbConn.query(query, (error, results) => {
      if (error) throw error;
      res.send(results);
      console.log(results);
    });
  } catch (error) {
    console.log(error);
  }
};

export const addtocart = async (req, res) => {
  const token = req.headers["token"];
  jwt.verify(token, secretKey, (error, decode) => {
    if (error) throw error;
    let query = `select customerid from prince_customer where email = "${decode.email}"`;
    dbConn.query(query, (error, result) => {
      if (error) throw error;
      let subquery = `insert into prince_pro_cus (proid,cusid) values("${req.body.id}","${result[0].customerid}")`;
      dbConn.query(subquery, (error, result) => {
        if (error) throw error;
      });
    });
  });
};
