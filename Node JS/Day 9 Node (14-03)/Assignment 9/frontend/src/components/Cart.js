import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  return (
    <table className="table" style={{ margin: "80px 20px 10px 10px" }}>
      <thead>
        <tr>
          <th scope="col">Product Code</th>
          <th scope="col">Product Name</th>
          <th scope="col">Brand</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
          <th scope="col">Add to cart</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {products &&
          products.map((items) => {
            return (
              <tr>
                <td>{items.procode}</td>
                <td>{items.proname}</td>
                <td>{items.brand}</td>
                <td>{items.proprice}</td>
                <td>{items.status}</td>
                <td>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add"
                    onClick={() => handleAdd(items.procode, items.status)}
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Cart;
