import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigation = useNavigate();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState("");

  const getParent = async () => {
    try {
      let res = await axios.get("http://localhost:8000/getparent");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Enter category name");
    } else if (!category) {
      alert("Please select category type");
    } else {
      try {
        let res = await axios.post("http://localhost:8000/addcategory", {
          category: category,
          name: name,
          type: type,
        });
        navigation("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getParent();
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          marginLeft: "10px",
          marginTop: "20px",
          display: "flex",
          alignItems: "start",
        }}
      >
        <form
          className="category"
          onSubmit={addCategory}
          style={{ marginLeft: "20px" }}
        >
          <h3>Add Category</h3>
          <div className="form-group">
            <label htmlFor="type">Category Type: </label>&nbsp;
            <input
              id="Parent"
              type="radio"
              name="type"
              value="Parent"
              onChange={(e) => {
                setType(e.target.value);
              }}
              checked={type == "Parent" ? "true" : null}
            />
            <label htmlFor="Parent" className="px-2">
              Parent
            </label>
            &nbsp;
            <input
              id="Child"
              type="radio"
              name="type"
              value="Child"
              onChange={(e) => setType(e.target.value)}
              checked={type == "Child" ? "true" : null}
            />
            <label htmlFor="Child" className="px-2">
              Child
            </label>
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="name">Category Name: </label> &nbsp;{" "}
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Category Name"
            />
          </div>
          <br></br>
          {type == "Child" && (
            <div>
              {" "}
              <label htmlFor="department">Category: </label>&nbsp;&nbsp;
              <select
                id="category"
                type="text"
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="select">--Select--</option>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))
                ) : (
                  <></>
                )}
              </select>
            </div>
          )}
          <div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Category;
