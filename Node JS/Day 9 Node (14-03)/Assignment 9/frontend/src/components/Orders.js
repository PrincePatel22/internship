import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const navigation = useNavigate();

  const [data, setData] = useState();

  const order = async () => {
    try {
      const res = await axios.get("http://localhost:8000/orders");
      setData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderview = (id) => {
    navigation("/Orderview/" + id);
  };

  useEffect(() => {
    order();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>My Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((items) => {
              return (
                <tr>
                  <td>ORD000 {items.id}</td>
                  <td>{items.date}</td>
                  <td>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="view"
                      onClick={() => {
                        orderview(items.id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
