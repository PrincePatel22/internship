import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const router = useRouter();

  const getTodo = async () => {
    console.log(router.query.id);
    try {
      const res = await axios.post("/api/gettodo", {
        id: router.query.id,
      });
      setTitle(res.data[0].title);
      setDescription(res.data[0].description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    if (title == "") {
      alert("title is required");
    } else if (description == "") {
      alert("description is required");
    } else {
      try {
        let res = await axios.put("/api/edit", {
          id: router.query.id,
          title: title,
          description: description,
        });
        router.push("/")
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <>
      <main>
        <br />
        <br />
        <br />
        <form className="needs-validation">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3>Update Todo</h3>

            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Enter Your title"
              defaultValue={title}
              style={{ width: "300px", marginBottom: "10px" }}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="form-control"
              name="description"
              placeholder="Enter your description"
              defaultValue={description}
              style={{ width: "300px", resize: "none", marginBottom: "10px" }}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="button" className="btn btn-dark" onClick={handleEdit}>
              Update
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
