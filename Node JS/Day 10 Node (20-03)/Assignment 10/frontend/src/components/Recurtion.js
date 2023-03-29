import React, { useState, useEffect } from "react";
import axios from "axios";

const Recurtion = ({ item }) => {
  const [name, setName] = useState("");
  const [childData, setChildData] = useState([]);

  useEffect(() => {
    if (item) {
      console.log(item);
      setName(item.name);
      getChildData();
    }
  }, []);

  const getChildData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/getdata", {
        params: { id: item.id },
      });
      setChildData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletedata = async () => {
    try {
      let res = await axios.get("http://localhost:8000/delete", {
        params: { name: name, id: item.id },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <li>
        {name}
        &nbsp;&nbsp;
        <button className="btn btn-danger" onClick={deletedata}>
          Delete
        </button>
        {childData.map((item1) => (
          <Recurtion item={item1} />
        ))}
      </li>
    </div>
  );
};

export default Recurtion;
