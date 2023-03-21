import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Orderview = (props) => {
  const navigation = useNavigate();
  const params = useParams();

  const [orders, setOrders] = useState();
  const [total, setTotal] = useState();

  const orderdetails = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/orderview/" + params.id
      );
      let total = 0;
      for (let i = 0; i < res.data.length; i++) {
        total = total + parseInt(res.data[i].total);
      }
      setTotal(total);

      setOrders(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    orderdetails();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Orders details</h2>
      <h3>Order ID : ORD000{orders && orders[0].id}</h3>
      <h3>Date : {orders && orders[0].date}</h3><br/>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Code</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((items) => {
              return (
                <tr>
                  <td>P000{items.procode}</td>
                  <td>{items.proname}</td>
                  <td>{items.proprice}</td>
                  <td>{items.qty}</td>
                  <td>{items.total}</td>
                </tr>
              );
            })}
          <tr>
            <th>Grand Total</th>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orderview;
