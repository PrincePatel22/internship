import "./App.css";
import axios from "axios";

function App() {
  const createFolder = async () => {
    let name = document.getElementById("create-folder").value;
    let baseurl = "http://localhost:8000/createFolder";
    let display = document.getElementById("display");
    try {
      const response = await axios.post(baseurl, { name: name });
      display.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createFile = async () => {
    let name = document.getElementById("create-file").value;
    let baseurl = "http://localhost:8000/createFile";
    let display = document.getElementById("display1");
    try {
      const response = await axios.post(baseurl, { name: name });
      display.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const writeData = async () => {
    let filName = document.getElementById("filName").value;
    let content = document.getElementById("content").value;
    let baseurl = "http://localhost:8000/writeData";
    let display = document.getElementById("display2");
    try {
      const response = await axios.post(baseurl, {
        filName: filName,
        content: content,
      });
      display.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const appendData = async () => {
    let filName = document.getElementById("append-file").value;
    let content = document.getElementById("append-content").value;
    let baseurl = "http://localhost:8000/appendData";
    let display = document.getElementById("display3");
    try {
      const response = await axios.post(baseurl, {
        filName: filName,
        content: content,
      });
      display.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const readData = async () => {
    let filName = document.getElementById("read-file").value;
    let baseurl = "http://localhost:8000/readData";
    let display = document.getElementById("display4");
    try {
      const response = await axios.post(baseurl, {
        filName: filName,
      });
      display.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const displayFile = async () => {
    let filName = document.getElementById("display-file").value;
    let baseurl = "http://localhost:8000/displayFile";
    let display = document.getElementById("display6");
    try {
      const response = await axios.post(baseurl, {
        filName: filName,
      });
      display.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFile = async () => {
    let filName = document.getElementById("delete-file").value;
    let baseurl = "http://localhost:8000/deleteFile";
    let display = document.getElementById("display5");
    try {
      const response = await axios.post(baseurl, {
        filName: filName,
      });
      display.innerHTML = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="div">
        <h3>Create Folder</h3>
        <input
          type="text"
          name="text"
          placeholder="Create Folder"
          id="create-folder"
        ></input>
        &nbsp;
        <button type="submit" onClick={createFolder}>
          Create Folder
        </button>
        <p id="display"></p>
      </div>
      <div className="div">
        <h3>Create File</h3>
        <input
          type="text"
          name="text"
          placeholder="Create File"
          id="create-file"
        ></input>
        &nbsp;
        <button type="submit" onClick={createFile}>
          Create File
        </button>
        <p id="display1"></p>
      </div>
      <div className="div">
        <h3>Write data into file</h3>
        <input
          type="text"
          name="text"
          placeholder="File Name"
          id="filName"
        ></input>
        &nbsp;
        <textarea
          placeholder="enter your data"
          id="content"
          style={{ height: "70px", width: "150px" }}
        />
        &nbsp;
        <button type="submit" onClick={writeData}>
          Submit
        </button>
        <p id="display2"></p>
      </div>
      <div className="div">
        <h3>append data into file</h3>
        <input
          type="text"
          name="text"
          placeholder="File Name"
          id="append-file"
        ></input>
        &nbsp;
        <textarea
          placeholder="enter your data"
          id="append-content"
          style={{ height: "70px", width: "150px" }}
        />
        &nbsp;
        <button type="submit" onClick={appendData}>
          Append Data
        </button>
        <p id="display3"></p>
      </div>
      <div className="div">
        <h3>read data from file</h3>
        <input
          type="text"
          name="text"
          placeholder="File Name"
          id="read-file"
        ></input>
        &nbsp;
        <button type="submit" onClick={readData}>
          Read
        </button>
        <p id="display4"></p>
      </div>
      <div className="div">
        <h3>delete file</h3>
        <input
          type="text"
          name="text"
          placeholder="File Name"
          id="delete-file"
        ></input>
        &nbsp;
        <button type="submit" onClick={deleteFile}>
          Delete
        </button>
        <p id="display5"></p>
      </div>
      <div className="div">
        <h3>display file</h3>
        <input
          type="text"
          name="text"
          placeholder="File Name"
          id="display-file"
        ></input>
        &nbsp;
        <button type="submit" onClick={displayFile}>
          Display
        </button>
        <p id="display6"></p>
      </div>
    </>
  );
}

export default App;
