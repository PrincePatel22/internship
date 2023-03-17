import React, { useState } from "react";

const Orders = () => {
    const [orders,setOrders] = useState();

  const orderview = async () => {
    try {
      const res = await axios.get("http://localhost:8080/orderview/" + params.id);
      setOrders(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>
              <input type="submit" className="btn btn-primary" value="view" onclick/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
