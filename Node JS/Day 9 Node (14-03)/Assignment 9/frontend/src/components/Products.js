import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const navigation = useNavigate();
  const [filterProduct, setFilterProduct] = useState();
  const [products, setProducts] = useState("");
  const [cart, setCart] = useState("");

  useEffect(() => {
    getproducts();
  }, []);

  const handleAdd = async (id, status) => {
    const baseUrl = "http://localhost:8000/addtocart";
    if (status == "active") {
      const response = await axios.post(
        baseUrl,
        { id: id },
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
    } else {
      alert("Product is not available");
    }
  };

  const getproducts = async () => {
    const baseUrl = "http://localhost:8000/getproducts";
    try {
      const response = await axios.get(baseUrl);
      let data = response.data;
      console.log(data);
      setProducts(data);
      setFilterProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchFilter = () => {
    let temp = [];
    let search = props.search;
    if (search == "") {
      setFilterProduct(products);
    } else {
      for (let i = 0; i < filterProduct.length; i++) {
        if (
          filterProduct[i].proname
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          filterProduct[i].procode == search
        ) {
          temp.push(filterProduct[i]);
        }
      }
      setFilterProduct(temp);
    }
  };

  useEffect(() => {
    searchFilter();
  }, [props.search]);

  return (
    <div>
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
          {filterProduct &&
            filterProduct.map((items) => {
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
    </div>
  );
};

export default Products;
