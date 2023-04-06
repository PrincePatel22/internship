import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title == "") {
      alert("title is required");
    } else if (description == "") {
      alert("description is required");
    } else {
      try {
        let res = await axios.post("/api/edit", {
          title: title,
          description: description,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

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
            <h3>Add Todo</h3>

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
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
