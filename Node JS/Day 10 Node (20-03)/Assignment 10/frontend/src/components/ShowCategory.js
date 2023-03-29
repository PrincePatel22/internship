import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Recurtion from "./Recurtion";

const ShowCategory = () => {
  const navigation = useNavigate();
  const [data, setData] = useState("");

  const getdata = async () => {
    try {
      let res = await axios.get("http://localhost:8000/parentdata");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div
      style={{
        marginLeft: "10px",
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
      }}
    >
      <h1>Category List</h1>
      <br></br>
      <div>
        {data && data.length > 0 ? (
          data.map((item, index) => <Recurtion key={index} item={item} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ShowCategory;
