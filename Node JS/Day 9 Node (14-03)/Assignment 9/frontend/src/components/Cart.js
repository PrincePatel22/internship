import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const navigation = useNavigate();

  const [cart, setCart] = useState();
  const [total, setTotal] = useState();

  const addone = async (proid, qty, cusid) => {
    const baseUrl = "http://localhost:8000/addone";
    try {
      const response = await axios.post(baseUrl, {
        proid: proid,
        qty: qty,
        cusid: cusid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const subone = async (proid, qty, cusid) => {
    const baseUrl = "http://localhost:8000/subone";
    try {
      const response = await axios.post(baseUrl, {
        proid: proid,
        qty: qty,
        cusid: cusid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeProduct = async (proid, cusid) => {
    const baseUrl = "http://localhost:8000/removeproduct";
    try {
      const response = await axios.post(baseUrl, {
        proid: proid,
        cusid: cusid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    const baseUrl = "http://localhost:8000/getcart";
    try {
      const response = await axios.get(baseUrl, {
        headers: { token: localStorage.getItem("token") },
      });
      let data = response.data;
      let total = 0;
      for (let i = 0; i < response.data.length; i++) {
        total = total + response.data[i].total;
      }
      setTotal(total);
      setCart(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  // useEffect(() => {
  //   getCart();
  // }, [addone,subone,removeProduct]);

  const addorder = async () => {
    const baseUrl = "http://localhost:8000/addorder";
    try {
      const response = await axios.post(baseUrl, { cart: cart });
      navigation("/Orders");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>My cart</h2>
      <table className="table" style={{ margin: "80px 20px 10px 10px" }}>
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Add</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {cart &&
            cart.map((items) => {
              return (
                <tr key={items.procode}>
                  <td>{items.proname}</td>
                  <td>{items.brand}</td>
                  <td>{items.proprice}</td>
                  <td>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="+"
                      onClick={() =>
                        addone(items.procode, items.qty, items.cusid)
                      }
                    />
                  </td>
                  <td>{items.qty}</td>
                  <td>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="-"
                      onClick={() =>
                        subone(items.procode, items.qty, items.cusid)
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="X"
                      onClick={() => removeProduct(items.procode, items.cusid)}
                    />
                  </td>
                </tr>
              );
            })}
          <tr>
            <th>Total</th>
            <td></td>
            <td>{total}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <input
                type="submit"
                className="btn btn-danger"
                value="Submit order"
                onClick={addorder}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
