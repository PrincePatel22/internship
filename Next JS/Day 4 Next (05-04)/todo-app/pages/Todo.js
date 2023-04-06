import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Todo() {
  const [todo, setTodo] = useState();
  let router = useRouter();

  const getTodo = async () => {
    try {
      let res = await axios.get("/api/get");
      console.log(res.data);
      setTodo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await axios.post("/api/deleteTodo", { id: id });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      {todo &&
        todo.map((items) => {
          return (
            <div
              className="card"
              style={{  display: "flex", flexDirection: "row" }}
            >
              <div className="card-body" key={items.id}>
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{items.description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => router.push("/edit/" + items.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(items.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
