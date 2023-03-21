import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Recurtion from "./Recurtion";

function ShowCategory() {
  const navigate = useNavigate();
  const [ans, setAns] = useState("");

  function getdata() {
    axios.get("http://localhost:8000/parentdata").then((res) => {
      const ans = res.data;
      console.log(res.data);
      setAns(ans);
    });
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <Header />
      <h1>Category List</h1>
      <br></br>
      <div>
        {ans.length > 0 ? (
          ans.map((item, index) => <Recurtion key={index} item={item} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ShowCategory;
