import React, { useState } from "react";

function Name() {
  const [name, setName] = useState("");

  const alertName = () => {
    alert(name);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>This is a Functional Component</h3>
      <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your Name"
      />
      <button onClick={alertName}>Alert</button>
    </div>
  );
}

export default Name;
