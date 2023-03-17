export const orderdetails = async (req, res) => {
  const data = req.body;
  let sql = `Insert into Shubham_Order(date) values(CURDATE())`;
  con.query(sql, (err, resulte) => {
    if (err) throw err;
    let sql2 = `select id from Shubham_Order order by id desc limit 1`;
    con.query(sql2, (err, resulte) => {
      if (err) throw err;
      data.map((item) => {
        let sql3 = `insert into shubham_orderdetails(Order_id,Product_code,Product_name,Product_price,qty,total) values("${resulte[0].id}","${item.Product_code}","${item.Product_name}","${item.Product_price}","${item.qty}","${item.total}")`;
        con.query(sql3, (err, resulte) => {
          if (err) throw err;
        });
        console.log(resulte);
      });
      return res.send(resulte);
    });
  });
};
export const view = async (req, res) => {
  let sql = `select a.id, a.date, b.Product_code, b.Product_name, b.Product_price, b.qty, b.total from Shubham_Order a  inner join shubham_orderdetails b on a.id = b.Order_id where b.Order_id = "${req.params.id}"`;
  con.query(sql, (err, resulte) => {
    if (err) throw err;
    console.log(resulte);
    res.send(resulte);
  });
};

const view = async () => {
  try {
    const res = await axios.get("http://localhost:8080/view/" + params.id);
    setDisp(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

const val1 = async () => {
  try {
    const res = await axios.get("http://localhost:8080/order");
    setDisp(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const navigatetodetail = (id) => {
  navigator("/orderdetails/" + id);
};

const creatorder = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/orderdetails",
      cart
    );
    alert("Data Inserted");
    navigation("/order");
  } catch (error) {
    console.log(error);
  }
};
