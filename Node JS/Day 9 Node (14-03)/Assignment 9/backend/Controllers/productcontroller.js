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
    //   let subquery = `insert into prince_pro_cus (proid,cusid,qty) values("${req.body.id}","${result[0].customerid}","")`;
      dbConn.query(
        `select qty as count from prince_pro_cus where customer_id = ${result[0].customerid} and Product_id = ${req.body.Id};`,
        (error, result) => {
          if (error) throw error;
          if (result == "") {
            con.query(
              `insert into prince_pro_cus (proid, cusid,qty) values (${req.body.Id},${result[0].customerid},1)`,
              function (err, result) {
                if (err) throw err;
              }
            );
          } else {
            con.query(
              `update prince_pro_cus set qty = ${result[0].count}+1 where cusid = ${result[0].customerid} and proid = ${req.body.Id}`,
              function (err, result) {
                if (err) throw err;
              }
            );
          }
        }
      );
    });
  });
};

export const customer_product = (req, res) => {
  const token = req.body.headers["tkn"];
  // console.log(token);
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });
  jwt.verify(token, Secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    // console.log(decoded)
    con.query(
      `select id from customers_35 where Email = "${decoded.Email}"`,
      function (err, result) {
        // console.log(result[0].id);
        if (err) throw err;
        const id = result[0].id;
        // console.log(id);
        con.query(
          `select quantity as count from cust_Pro_35 where customer_id = ${id} and Product_id = ${req.body.Id};`,
          function (err, result) {
            if (err) throw err;
            // console.log(result);                // let counts = result[0].count;
            if (result == "") {
              con.query(
                `insert into cust_Pro_35 (id, customer_id, Product_id,quantity) values ("",${id},${req.body.Id},1)`,
                function (err, result) {
                  if (err) throw err;
                }
              );
            } else {
              con.query(
                `update cust_Pro_35 set quantity = ${result[0].count}+1 where customer_id = ${id} and Product_id = ${req.body.Id}`,
                function (err, result) {
                  if (err) throw err;
                }
              );
            }
          }
        );
      }
    );
  });
};
