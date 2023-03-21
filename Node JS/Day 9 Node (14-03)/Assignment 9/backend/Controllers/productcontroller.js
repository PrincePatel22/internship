import dbConn from "../Models/models.js";
import jwt from "jsonwebtoken";
let secretKey = "secretkey";

// customerid,firstname,lastname,email,phone,gender,dob,password,token,address;  prince_customer
// procode, proname, brand, proprice,status; prince_products
// recid,proid,cusid,qty; prince_pro_cus
// id, date prince_order
//recid, ordid, procode, proname, proprice, qty, total  prince orderdetails

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
      let id = result[0].customerid;
      console.log(id);
      //   let subquery = `insert into prince_pro_cus (proid,cusid,qty) values("${req.body.id}","${result[0].customerid}","")`;
      dbConn.query(
        `select qty as count from prince_pro_cus where cusid = "${id}" and proid ="${req.body.id}";`,
        (error, result) => {
          if (error) throw error;
          if (result == "") {
            dbConn.query(
              `insert into prince_pro_cus (proid,cusid,qty) values ("${req.body.id}","${id}",1)`,
              function (err, result) {
                if (err) throw err;
              }
            );
          } else {
            dbConn.query(
              `update prince_pro_cus set qty = ${result[0].count}+1 where cusid = "${id}" and proid = "${req.body.id}"`,
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

export const getcart = async (req, res) => {
  const token = req.headers["token"];
  jwt.verify(token, secretKey, (error, decode) => {
    // console.log(decode);
    let query = `select customerid from prince_customer where email = "${decode.email}"`;
    dbConn.query(
      `select customerid from prince_customer where email = "${decode.email}"`,
      (error, result) => {
        if (error) throw error;
        dbConn.query(
          `select procode,proname,brand,proprice,cusid,qty,(qty*proprice)as total from prince_products inner join prince_pro_cus on prince_products.procode=prince_pro_cus.proid where cusid=${result[0].customerid}`,
          (error, result) => {
            if (error) throw error;
            console.log(result);
            res.send(result);
          }
        );
      }
    );
  });
};

export const addone = async (req, res) => {
  const qty = req.body.qty;
  const proid = req.body.proid;
  const cusid = req.body.cusid;
  dbConn.query(
    `update prince_pro_cus set qty= ${qty}+1 where cusid=${cusid} and proid=${proid}`,
    (error, result) => {
      if (error) throw error;
    }
  );
};
export const subone = async (req, res) => {
  const qty = req.body.qty;
  const proid = req.body.proid;
  const cusid = req.body.cusid;
  if (qty == 1) {
    dbConn.query(
      `delete from prince_pro_cus where cusid=${cusid} and proid=${proid}`,
      (error, result) => {
        if (error) throw error;
      }
    );
  } else {
    dbConn.query(
      `update prince_pro_cus set qty= ${qty}-1 where cusid=${cusid} and proid=${proid}`,
      (error, result) => {
        if (error) throw error;
      }
    );
  }
};

export const removeproduct = async (req, res) => {
  const proid = req.body.proid;
  const cusid = req.body.cusid;

  dbConn.query(
    `delete from prince_pro_cus where cusid=${cusid} and proid=${proid}`,
    (error, result) => {
      if (error) throw error;
    }
  );
};

export const addorder = async (req, res) => {
  const data = req.body.cart;
  let sql = `Insert into prince_order(date) values(CURDATE())`;
  dbConn.query(sql, (error, result) => {
    if (error) throw error;
    let subquery = `select id from prince_order order by id desc limit 1`;
    dbConn.query(subquery, (error, result) => {
      if (error) throw error;
      data.map((item) => {
        let subquery2 = `insert into prince_orderdetails(ordid,procode,proname,proprice,qty,total) 
			values("${result[0].id}","${item.procode}","${item.proname}","${item.proprice}","${item.qty}","${item.total}")`;
        dbConn.query(subquery2, (error, result) => {
          if (error) throw error;
        });
        console.log(result);
      });
      res.send(result);
    });
  });
};

export const orderview = async (req, res) => {
  let sql = `select a.id, DATE_FORMAT(a.date,"%d/%m/%y") as date, b.procode, b.proname, b.proprice, b.qty, b.total from prince_order a inner join prince_orderdetails b on a.id = b.ordid where b.ordid = "${req.params.id}"`;
  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
};

export const orders = async (req, res) => {
  let query = `select * from prince_order`;
  try {
    dbConn.query(query, (error, result) => {
      if (error) throw error;
      res.send(result);
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
};
